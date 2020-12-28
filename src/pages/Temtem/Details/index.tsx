import React, { useCallback, useMemo, useRef } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { TEMTEM_SUMMARY_HEIGHT } from '../../../constants';
import Text from '../../../components/Text';

import { tabs, TAB_BUTTON_WIDTH } from './tabs';
import Styled from './styles';

type DetailsProps = {
  translateY: Animated.Value;
};

const { width } = Dimensions.get('window');

const Details: React.FC<DetailsProps> = ({ translateY }) => {
  const { colors } = useTheme();

  const scrollViewRef = useRef<ScrollView>(null);

  const translateX = useMemo(() => new Animated.Value(0), []);

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: translateX,
          },
        },
      },
    ],
    { useNativeDriver: false },
  );

  const handleChangeSlide = useCallback((index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: width * index,
        animated: true,
      });
    }
  }, []);

  const containerStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-TEMTEM_SUMMARY_HEIGHT, 0],
          outputRange: [0, -32],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const selectedIndicatorStyle = {
    transform: [
      {
        translateX: translateX.interpolate({
          inputRange: tabs.map((_, index) => width * index),
          outputRange: tabs.map((_, index) => TAB_BUTTON_WIDTH * index),
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Styled.Container style={containerStyle}>
      <Styled.Tabs>
        {tabs.map((tab, index) => {
          const color = translateX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [colors.grey, colors.black, colors.grey],
            extrapolate: 'clamp',
          });

          return (
            <Styled.TabButton
              key={index}
              onPress={() => handleChangeSlide(index)}
            >
              <Text bold style={{ color }}>
                {tab.name}
              </Text>
            </Styled.TabButton>
          );
        })}

        <Styled.SelectedIndicator style={selectedIndicatorStyle} />
      </Styled.Tabs>

      <Styled.TabButton onPress={() => handleChangeSlide(2)}>
        <Text>TESTE</Text>
      </Styled.TabButton>

      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
      >
        {tabs.map(({ slide: Slide }, index) => (
          <Styled.SlideWrapper key={index}>
            <Slide />
          </Styled.SlideWrapper>
        ))}
      </Animated.ScrollView>
    </Styled.Container>
  );
};

export default Details;
