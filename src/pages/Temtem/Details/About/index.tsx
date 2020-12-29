import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Foundation as Icon } from '@expo/vector-icons';

import Text from '../../../../components/Text';
import { SlideProps } from '../tabs';

import Styled from './styles';

const About: React.FC<SlideProps> = ({ temtem }) => {
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

  const formattedTraits = useMemo(() => temtem.traits.join(' / '), [
    temtem.traits,
  ]);

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

        <Styled.Section style={{ marginTop: 20 }}>
          <Styled.SectionTitle>Technical Details</Styled.SectionTitle>

          <Styled.SectionContent>
            <Styled.SectionSubtitle>Traits</Styled.SectionSubtitle>
            <Styled.SectionText>{formattedTraits}</Styled.SectionText>
          </Styled.SectionContent>

          <Styled.SectionContent>
            <Styled.SectionSubtitle>Gender</Styled.SectionSubtitle>

            <Styled.SectionText style={{ marginRight: 16 }}>
              <Icon name="male-symbol" size={16} color="#6890F0" />{' '}
              {temtem.genderRatio.male}%
            </Styled.SectionText>

            <Styled.SectionText style={{ marginRight: 16 }}>
              <Icon name="female-symbol" size={16} color="#EE99AC" />{' '}
              {temtem.genderRatio.female}%
            </Styled.SectionText>
          </Styled.SectionContent>

          <Styled.SectionContent>
            <Styled.SectionSubtitle>Catch Rate</Styled.SectionSubtitle>
            <Styled.SectionText>{temtem.catchRate}</Styled.SectionText>
          </Styled.SectionContent>

          <Styled.SectionContent>
            <Styled.SectionSubtitle>Egg Hatch</Styled.SectionSubtitle>
            <Styled.SectionText>{temtem.hatchMins}min</Styled.SectionText>
          </Styled.SectionContent>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Tv Yields</Styled.SectionTitle>

          {temtem.tvYields.hp > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>HP</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.hp}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.sta > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>STA</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.sta}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.spd > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>SPD</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.spd}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.atk > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>ATK</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.atk}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.def > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>DEF</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.def}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.spatk > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>SPATK</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.spatk}</Styled.SectionText>
            </Styled.SectionContent>
          )}

          {temtem.tvYields.spdef > 0 && (
            <Styled.SectionContent>
              <Styled.SectionSubtitle>SPDEF</Styled.SectionSubtitle>
              <Styled.SectionText>{temtem.tvYields.spdef}</Styled.SectionText>
            </Styled.SectionContent>
          )}
        </Styled.Section>
      </Styled.Section>
    </>
  );
};

export default About;
