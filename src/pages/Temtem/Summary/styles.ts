import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { TEMTEM_SUMMARY_HEIGHT } from '../../../constants';

const Container = styled(Animated.View)`
  height: ${TEMTEM_SUMMARY_HEIGHT}px;
`;

const Header = styled.View`
  flex: 1;
  padding: 0 24px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TemtemImageContainer = styled(Animated.View)`
  margin-top: 24px;

  align-items: center;
`;

const TemtemImage = styled(Image)`
  width: 256px;
  height: 256px;
  border-radius: 128px;
`;

export default { Container, Header, Row, TemtemImageContainer, TemtemImage };
