import React, { useMemo } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Temtem } from '../../../../types';
import Text from '../../../../components/Text';

import * as Styled from './styles';

type EvolutionProps = {
  temtem: Temtem;
};

interface EvolutionElement {
  name: string;
  levels?: number;
  image: string;
  next?: {
    name: string;
    image: string;
  };
}

const Evolution: React.FC<EvolutionProps> = ({ temtem }) => {
  const { colors } = useTheme();

  const formattedEvolutions = useMemo<EvolutionElement[] | null>(() => {
    const image =
      'https://static.wikia.nocookie.net/temtem_gamepedia_en/images/9/99/Oree.png';

    if (!temtem.evolution.evolves || !temtem.evolution.evolutionTree) {
      return null;
    }

    const evolutions: EvolutionElement[] = [{ name: temtem.name, image }];

    evolutions[0].levels = temtem.evolution.evolutionTree[0].levels;
    evolutions[0].next = {
      name: temtem.evolution.evolutionTree[0].name,
      image,
    };

    const nextEvolutions: EvolutionElement[] = [];
    const evolutionTree = temtem.evolution.evolutionTree || [];
    temtem.evolution.evolutionTree.forEach((evo, index) => {
      if (index < evolutionTree.length - 1) {
        nextEvolutions.push({
          name: evo.name,
          image,
          levels: evo.levels,
          next: {
            name: evolutionTree[index + 1].name,
            image,
          },
        });
      }
    });

    return [...evolutions, ...nextEvolutions];
  }, [temtem]);

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
