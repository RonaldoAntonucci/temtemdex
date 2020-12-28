import React, { useCallback, useMemo, useRef } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { TEMTEM_SUMMARY_HEIGHT } from '../../../constants';
import Text from '../../../components/Text';

import { tabs } from './tabs';
import Styled from './styles';

type DetailsProps = {
  translateY: Animated.Value;
};

const { width } = Dimensions.get('window');

const Details: React.FC<DetailsProps> = ({ translateY }) => {
  const { colors } = useTheme();

  const scrollViewRef = useRef<ScrollView>(null);

  const translateX = useMemo(() => new Animated.Value(0), []);

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
      </Styled.Tabs>
      <Text>Details</Text>
    </Styled.Container>
  );
};

export default Details;
