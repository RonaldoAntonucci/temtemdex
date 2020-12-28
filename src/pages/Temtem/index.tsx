import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Animated, StatusBar } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

import { Temtem as TemtemType } from '../../types';
import { TEMTEM_SUMMARY_HEIGHT } from '../../constants';
import Block from '../../components/Block';
import Dots from '../../components/Dots';

import Header from './Header';
import Summary from './Summary';
import Details from './Details';
import Styled from './styles';

type RouteParams = {
  temtem: TemtemType;
};

const Temtem: React.FC = () => {
  const route = useRoute();

  const { temtem } = route.params as RouteParams;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChanged = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      if (translationY < -100) {
        opened = true;
      } else {
        opened = false;
        translateY.flattenOffset();
      }

      Animated.timing(translateY, {
        toValue: opened ? -TEMTEM_SUMMARY_HEIGHT : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        translateY.extractOffset();
      });
    }
  };

  const detailsStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-TEMTEM_SUMMARY_HEIGHT, 0, 200],
          outputRange: [-TEMTEM_SUMMARY_HEIGHT, 0, 50],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const dotsStyle = {
    opacity: translateY.interpolate({
      inputRange: [-200, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Styled.Container temtemTypes={temtem.types}>
        <Block />
        <Dots style={dotsStyle} />

        <Styled.Content>
          <Header
            translateY={translateY}
            temtemName={temtem.name}
            number={temtem.number}
          />

          <Summary
            translateY={translateY}
            name={temtem.name}
            number={temtem.number}
            types={temtem.types}
            image={temtem.portraitWikiUrl}
          />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <Styled.DetailsContainer style={detailsStyle}>
              <Details />
            </Styled.DetailsContainer>
          </PanGestureHandler>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default Temtem;
