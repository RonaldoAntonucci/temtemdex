import { darken } from 'polished';
import styled from 'styled-components/native';

import { TemtemType } from '../../types';
import getColorsByTypes from '../../util/getColorsByTypes';

type ContainerProps = {
  temtemTypes: TemtemType[];
};

const Container = styled.View<ContainerProps>`
  background-color: ${props =>
    darken(0.1, getColorsByTypes(props.temtemTypes)[0])};
  flex: 1;
`;

const Content = styled.View``;

export default { Container, Content };
