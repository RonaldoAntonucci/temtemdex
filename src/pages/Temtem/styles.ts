import { darken } from 'polished';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { TemtemType } from '../../types';
import getColorsByTypes from '../../util/getColorsByTypes';

type ContainerProps = {
  temtemTypes: TemtemType[];
};

type DetailsContainer = {
  detailsOpen: boolean;
};

const Container = styled.View<ContainerProps>`
  background-color: ${props =>
    darken(0.1, getColorsByTypes(props.temtemTypes)[0])};
  flex: 1;
`;

const Content = styled.View``;

const DetailsContainer = styled(Animated.View)<DetailsContainer>`
  position: relative;
  z-index: ${props => (props.detailsOpen ? 3 : 1)};
`;

export default { Container, Content, DetailsContainer };
