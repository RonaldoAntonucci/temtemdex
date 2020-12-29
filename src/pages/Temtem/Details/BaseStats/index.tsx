import React, { useMemo } from 'react';

import Text from '../../../../components/Text';
import { SlideProps } from '../tabs';

import Styled from './styles';

type StatsNames = ['hp', 'sta', 'spd', 'atk', 'def', 'spatk', 'spdef', 'total'];

const BaseStats: React.FC<SlideProps> = ({ temtem }) => {
  const statsNames: StatsNames = useMemo(
    () => Object.keys(temtem.stats) as StatsNames,
    [temtem.stats],
  );

  const mediaValues = useMemo(() => {
    const values = Object.values(temtem.stats);
    values.pop();

    const media = values.reduce((total, value) => {
      const s = total + value;

      return s;
    }, 0);

    return media / values.length;
  }, [temtem.stats]);

  return (
    <>
      {statsNames.map(statName => (
        <Styled.Stat key={statName}>
          <Text>{statName}</Text>

          <Styled.StatGraph>
            <Text bold style={{ width: 32, textAlign: 'right' }}>
              {temtem.stats[statName]}
            </Text>

            <Styled.StatLine>
              <Styled.StatValue
                width={
                  statName === 'total' ? mediaValues : temtem.stats[statName]
                }
              />
            </Styled.StatLine>
          </Styled.StatGraph>
        </Styled.Stat>
      ))}
    </>
  );
};

export default BaseStats;
