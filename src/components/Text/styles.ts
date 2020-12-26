import styled, { css } from 'styled-components/native';
import { Animated } from 'react-native';

import { TextProps } from '.';

const Container = styled(Animated.Text)<TextProps>`
  ${({ theme, variant }) => theme.textVariantes[variant || 'title']};
  color: ${({ color }) => color};

  ${props =>
    props.bold &&
    css`
      font-family: ${({ theme }) => theme.fontFamily.bold};
    `}
`;

export default { Container };
