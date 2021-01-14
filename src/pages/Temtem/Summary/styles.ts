import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { TEMTEM_SUMMARY_HEIGHT } from '../../../constants';

const { width } = Dimensions.get('screen');

export const ScrollContainer = styled.ScrollView`
  z-index: 2;
`;

export const ScrollContent = styled.View`
  width: ${width + 100}px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Container = styled(Animated.View)`
  height: ${TEMTEM_SUMMARY_HEIGHT}px;
`;

export const Header = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TemtemImageContainer = styled(Animated.View)`
  margin-top: 24px;

  align-items: center;
`;

export const TemtemImage = styled(Image)`
  width: 256px;
  height: 256px;
  border-radius: 128px;
`;
