import React, { useCallback, useMemo, useState } from 'react';

import { Temtem } from '../../../../types';
import Text from '../../../../components/Text';

import * as Styled from './style';

interface MovesProps {
  temtem: Temtem;
}

const Moves: React.FC<MovesProps> = ({ temtem }) => {
  const [selected, setSelected] = useState('Levelling');

  const formattedTechniques = useMemo(
    () => temtem.techniques.filter(tech => tech.source === selected),
    [selected, temtem.techniques],
  );

  const handleClickLevelling = useCallback(() => setSelected('Levelling'), []);

  const handleClickCourses = useCallback(
    () => setSelected('TechniqueCourses'),
    [],
  );

  const handleClickBreeding = useCallback(() => setSelected('Breeding'), []);

  return (
    <Styled.Container>
      <Styled.SectionLine>
        <Styled.HeaderButton
          onPress={handleClickLevelling}
          selected={selected === 'Levelling'}
        >
          <Styled.SectionTitle>Levelling</Styled.SectionTitle>
        </Styled.HeaderButton>

        <Styled.HeaderButton
          onPress={handleClickCourses}
          selected={selected === 'TechniqueCourses'}
        >
          <Styled.SectionTitle>Courses</Styled.SectionTitle>
        </Styled.HeaderButton>

        <Styled.HeaderButton
          onPress={handleClickBreeding}
          selected={selected === 'Breeding'}
        >
          <Styled.SectionTitle>Breeding</Styled.SectionTitle>
        </Styled.HeaderButton>
      </Styled.SectionLine>

      <Styled.Section>
        <Styled.ShadowContainer>
          <Styled.SectionLine>
            <Text bold>Name</Text>

            <Text bold>Lvl</Text>
          </Styled.SectionLine>
          {formattedTechniques.map(technique => (
            <Styled.SectionLine key={technique.name}>
              <Styled.SectionText>{technique.name} </Styled.SectionText>

              <Styled.SectionText>{technique.levels} </Styled.SectionText>
            </Styled.SectionLine>
          ))}
        </Styled.ShadowContainer>
      </Styled.Section>
    </Styled.Container>
  );
};

export default Moves;
