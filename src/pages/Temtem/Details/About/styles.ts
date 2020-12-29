import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

import Text from '../../../../components/Text';

const Section = styled.View`
  margin-bottom: 32px;
`;

const ShadowContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;

  padding: 24px;

  flex-direction: row;
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

const SectionText = styled(Text).attrs({
  bold: true,
})``;

const SectionTitle = styled(Text).attrs({
  variant: 'body1',
  bold: true,
})`
  margin-bottom: 8px;
`;

const SectionContent = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
`;

const SectionSubtitle = styled(Text).attrs({
  color: 'grey',
})`
  width: 100px;
`;

export default {
  Section,
  ShadowContainer,
  SectionText,
  SectionTitle,
  SectionContent,
  SectionSubtitle,
};
