import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Animated } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Text from '../../../components/Text';
import Pokeball from '../../../components/Pokeball';

import Styled from './styles';

type HeaderProps = {
  translateY: Animated.Value;
  temtemName: string;
  number: number;
};

const Header: React.FC<HeaderProps> = ({ translateY, temtemName, number }) => {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const fadeStyle = {
    opacity: translateY.interpolate({
      inputRange: [-300, -200],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <Styled.Container>
      <Styled.GoBackButton onPress={goBack}>
        <Icon name="arrow-left" color={colors.white} size={24} />
      </Styled.GoBackButton>

      <Animated.View style={fadeStyle}>
        <Text variant="body1" color="white" bold>
          {temtemName}
        </Text>
      </Animated.View>

      <Animated.View style={fadeStyle}>
        <Text variant="body3" color="white" bold>
          #{number}
        </Text>
      </Animated.View>

      <Pokeball
        width={150}
        height={150}
        withRotate
        style={{
          position: 'absolute',
          right: -32,
          ...fadeStyle,
        }}
      />
    </Styled.Container>
  );
};

export default Header;
