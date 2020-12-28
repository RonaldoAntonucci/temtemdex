import React, { memo, useCallback } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Temtem } from '../../../types';
import Text from '../../../components/Text';
import TemtemTypes from '../../../components/TemtemTypes';
import Pokeball from '../../../components/Pokeball';

import Styled from './styles';

interface TemtemCardProps {
  temtem: Temtem;
  afterThirdCard: boolean;
  rightCard: boolean;
  opacity: Animated.Value;
}

const TemtemCard: React.FC<TemtemCardProps> = ({
  temtem,
  afterThirdCard,
  rightCard,
  opacity,
}) => {
  const { navigate } = useNavigation();

  const handleTemtem = useCallback(() => {
    navigate('Temtem', { temtem });
  }, [navigate, temtem]);

  const containerStyle = {
    opacity: opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Styled.Container style={containerStyle}>
      <Styled.Button
        afterThirdCard={afterThirdCard}
        rightCard={rightCard}
        temtemTypes={temtem.types}
        onPress={handleTemtem}
      >
        <Text bold>{temtem.name}</Text>
        <Styled.TemtemNumber>#{temtem.number} </Styled.TemtemNumber>
        <Styled.TemtemImage uri={temtem.portraitWikiUrl} />

        <Pokeball
          width={80}
          height={80}
          style={{
            position: 'absolute',
            right: -8,
            bottom: -8,
          }}
        />

        <TemtemTypes types={temtem.types} size="small" />
      </Styled.Button>
    </Styled.Container>
  );
};

export default memo(TemtemCard);
