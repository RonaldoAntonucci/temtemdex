import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Animated } from 'react-native';

import { Temtem as TemtemType } from '../../types';

import Header from './Header';
import Styled from './styles';

type RouteParams = {
  temtem: TemtemType;
};

const Temtem: React.FC = () => {
  const route = useRoute();

  const { temtem } = route.params as RouteParams;

  const translateY = new Animated.Value(0);

  return (
    <Styled.Container temtemTypes={temtem.types}>
      <Styled.Content>
        <Header
          translateY={translateY}
          temtemName={temtem.name}
          number={temtem.number}
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Temtem;
