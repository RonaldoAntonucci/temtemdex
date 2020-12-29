import styled from 'styled-components/native';
import { Animated } from 'react-native';

type StatValueProps = {
  width: number;
};

const Stat = styled.View`
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

const StatGraph = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
`;

const StatLine = styled.View`
  flex: 1;
  overflow: hidden;
  height: 3px;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin-left: 16px;
`;

const StatValue = styled(Animated.View)<StatValueProps>`
  height: 3px;
  background: ${({ theme, width }) => {
    if (width < 35) {
      return theme.colors.red;
    }
    if (width < 75) {
      return theme.colors.yellow;
    }

    return theme.colors.green;
  }};
  width: ${props => props.width}%;
`;

export default { Stat, StatGraph, StatLine, StatValue };
