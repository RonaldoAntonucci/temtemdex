import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { Image } from 'react-native-expo-image-cache';

import { TemtemType } from '../../../types';
import getColorsByTypes from '../../../util/getColorsByTypes';

const Container = styled.View`
  flex: 1;
`;

type ButtonProps = {
  afterThirdCard: boolean;
  rightCard: boolean;
  temtemTypes: TemtemType[];
};

const Button = styled(RectButton)<ButtonProps>`
  background-color: ${props => getColorsByTypes(props.temtemTypes)[0]};

  position: relative;
  overflow: hidden;
  height: 110px;
  margin: 10px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);

  ${props =>
    props.afterThirdCard &&
    css`
      margin-top: 0px;
      margin-left: 0px;
    `}
  ${props =>
    props.rightCard &&
    css`
      margin-right: 0px;
    `};
`;

const TemtemImage = styled(Image)`
  width: 72px;
  height: 72px;
`;

export default { Container, Button, TemtemImage };
