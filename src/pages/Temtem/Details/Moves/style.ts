import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { lighten } from 'polished';

import Text from '../../../../components/Text';

interface HeaderButtonProps {
  selected: boolean;
}

export const Container = styled.ScrollView``;

export const SectionTitle = styled(Text).attrs({
  variant: 'body1',
  bold: true,
})`
  margin-bottom: 8px;
`;

export const HeaderButton = styled.TouchableOpacity<HeaderButtonProps>`
  border-radius: 16px;
  padding: 4px 8px;

  ${props =>
    props.selected &&
    css`
      background: red;
      background: ${lighten(0.35, props.theme.colors.grey)};
    `};
`;

export const Section = styled.View`
  margin-bottom: 32px;
`;

export const ShadowContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  margin: 4px;

  padding: 24px;

  justify-content: space-between;

  ${Platform.OS === 'ios' &&
  css`
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  `}

  ${Platform.OS === 'android' &&
  css`
    elevation: 8;
  `}
`;

export const SectionLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const SectionText = styled(Text).attrs({
  bold: true,
  color: 'grey',
})``;
