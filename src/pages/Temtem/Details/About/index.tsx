import React, { useMemo } from 'react';
import { View } from 'react-native';

import Text from '../../../../components/Text';
import { Temtem } from '../../../../types';

import Styled from './styles';

type AboutProps = {
  temtem: Temtem;
};

const About: React.FC<AboutProps> = ({ temtem }) => {
  const formattedHeight = useMemo(() => {
    if (
      !temtem.details.height ||
      temtem.details.height.cm <= 0 ||
      temtem.details.height.inches <= 0
    ) {
      return '?';
    }

    const { cm } = temtem.details.height;
    const { inches } = temtem.details.height;

    return `${cm}cm / ${inches}"`;
  }, [temtem.details.height]);

  const formattedWeight = useMemo(() => {
    if (
      !temtem.details.weight ||
      temtem.details.weight.kg <= 0 ||
      temtem.details.weight.lbs <= 0
    ) {
      return '?';
    }

    const { kg } = temtem.details.weight;
    const { lbs } = temtem.details.weight;

    return `${kg}kg / ${lbs}lbs`;
  }, [temtem.details.weight]);

  return (
    <>
      <Styled.Section>
        <Text>{temtem.gameDescription}</Text>
      </Styled.Section>

      <Styled.Section>
        <Styled.ShadowContainer>
          <View>
            <Text color="grey" bold style={{ marginBottom: 8 }}>
              Height
            </Text>

            <Styled.SectionText>{formattedHeight}</Styled.SectionText>
          </View>

          <View>
            <Text color="grey" bold style={{ marginBottom: 8 }}>
              Weight
            </Text>

            <Styled.SectionText>{formattedWeight}</Styled.SectionText>
          </View>
        </Styled.ShadowContainer>
      </Styled.Section>
    </>
  );
};

export default About;
