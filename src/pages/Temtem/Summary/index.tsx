/* eslint-disable react/jsx-curly-newline */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  Easing,
  useWindowDimensions,
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Pokeball from '../../../components/Pokeball';
import TemtemTypes from '../../../components/TemtemTypes';
import Text from '../../../components/Text';
import { TEMTEM_SUMMARY_HEIGHT } from '../../../constants';
import useNextTemtem from '../../../hooks/useNextTemtem';
import usePrevTemtem from '../../../hooks/usePrevTemtem';
import { TemtemType } from '../../../types';

import * as Styled from './styles';

type SummaryProps = {
  translateY: Animated.Value;
  name: string;
  number: number;
  types: TemtemType[];
  image: string;
};

const Summary: React.FC<SummaryProps> = ({
  translateY,
  name,
  number,
  types,
  image,
}) => {
  const translateXNumber = useMemo(() => new Animated.Value(100), []);
  const translateXGenera = useMemo(() => new Animated.Value(200), []);

  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);
  const { navigate } = useNavigation();

  const nextTemtem = useNextTemtem(number);
  const prevTemtem = usePrevTemtem(number);

  const onScroll = useCallback(
    (event?: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (event) {
        const { x } = event.nativeEvent.contentOffset;

        if (x >= 100) {
          scrollViewRef.current?.scrollTo({ x: 50, animated: true });
          if (nextTemtem) {
            navigate('Temtem', { temtemNumber: nextTemtem.number });
          }
        }

        if (x <= 0) {
          scrollViewRef.current?.scrollTo({ x: 50, animated: true });
          if (prevTemtem) {
            navigate('Temtem', { temtemNumber: prevTemtem.number });
          }
        }
      }
    },
    [navigate, nextTemtem, prevTemtem],
  );

  const sizeChange = useCallback(() => {
    scrollViewRef.current?.scrollTo({ x: 50, animated: true });
  }, [scrollViewRef]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateXNumber, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.timing(translateXGenera, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.quad),
      }),
    ]).start();
  }, [translateXNumber, translateXGenera]);

  const numberStyle = {
    transform: [
      {
        translateX: translateXNumber.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 100],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const summaryStyle = {
    zIndex: translateY.interpolate({
      inputRange: [-TEMTEM_SUMMARY_HEIGHT, 0],
      outputRange: [-1, 2],
      extrapolate: 'clamp',
    }),
    opacity: translateY.interpolate({
      inputRange: [-200, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const temtemImageContainerStyle = {
    opacity: translateY.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [-20, 0, 25],
          extrapolate: 'clamp',
        }),
      },
      {
        scale: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [0.9, 1, 1.1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <Styled.ScrollContainer
      ref={scrollViewRef}
      horizontal
      snapToInterval={width}
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      onContentSizeChange={sizeChange}
    >
      <Styled.ScrollContent>
        <View>
          <Pokeball
            width={250}
            height={250}
            withRotate
            style={{
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}
          />
          <Styled.Container style={summaryStyle}>
            <Styled.Header>
              <Styled.Row>
                <View style={{ alignItems: 'flex-start' }}>
                  <Text variant="title" color="white">
                    {name}
                  </Text>
                </View>

                <Animated.View style={numberStyle}>
                  <Text variant="body2" color="white" bold>
                    #{number}
                  </Text>
                </Animated.View>
              </Styled.Row>

              <Styled.Row style={{ marginTop: 16 }}>
                <TemtemTypes size="regular" types={types} />
              </Styled.Row>
            </Styled.Header>

            <Styled.TemtemImageContainer style={temtemImageContainerStyle}>
              <Styled.TemtemImage uri={image} />
            </Styled.TemtemImageContainer>
          </Styled.Container>
        </View>
      </Styled.ScrollContent>
    </Styled.ScrollContainer>
  );
};

export default Summary;
