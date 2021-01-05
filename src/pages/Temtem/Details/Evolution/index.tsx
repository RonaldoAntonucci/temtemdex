import React, { useMemo } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Temtem } from '../../../../types';
import Text from '../../../../components/Text';
import { useEvolutions } from '../../../../hooks';

import * as Styled from './styles';

type EvolutionProps = {
  temtem: Temtem;
};

const Evolution: React.FC<EvolutionProps> = ({ temtem }) => {
  const { colors } = useTheme();

  const formattedEvolutions = useEvolutions(temtem.number);

  const noEvolutions = useMemo(() => {
    return <Text color="grey">No evolutions.</Text>;
  }, []);

  if (!formattedEvolutions) {
    return noEvolutions;
  }

  return (
    <>
      <Text variant="body1" bold>
        Evolution Chain
      </Text>

      <Styled.Content>
        {formattedEvolutions.map(evo => (
          <Styled.SectionContainer key={evo.name}>
            <Styled.Temtem>
              <Styled.TemtemBackground />

              <Styled.TemtemImage
                source={{
                  uri: evo.image,
                }}
              />
              <Text>{evo.name}</Text>
            </Styled.Temtem>

            {evo.next && (
              <>
                <Styled.Method>
                  <Icon name="arrow-right" size={20} color={colors.grey} />
                  <Text bold style={{ marginTop: 8 }}>
                    +{evo?.levels} Levels
                  </Text>
                </Styled.Method>

                <Styled.Temtem>
                  <Styled.TemtemBackground />

                  <Styled.TemtemImage
                    source={{
                      uri: evo.next.image,
                    }}
                  />
                  <Text>{evo.next.name}</Text>
                </Styled.Temtem>
              </>
            )}
          </Styled.SectionContainer>
        ))}
      </Styled.Content>
    </>
  );
};

export default Evolution;
