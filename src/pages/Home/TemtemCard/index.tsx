import React from 'react';

import { Temtem } from '../../../types';
import Text from '../../../components/Text';
import TemtemTypes from '../../../components/TemtemTypes';

import Styled from './styles';

interface TemtemCardProps {
  temtem: Temtem;
  afterThirdCard: boolean;
  rightCard: boolean;
}

const TemtemCard: React.FC<TemtemCardProps> = ({
  temtem,
  afterThirdCard,
  rightCard,
}) => {
  return (
    <Styled.Container>
      <Styled.Button
        afterThirdCard={afterThirdCard}
        rightCard={rightCard}
        temtemTypes={temtem.types}
      >
        <Text bold>{temtem.name}</Text>
        <Text>{temtem.number} </Text>
        <Styled.TemtemImage uri={temtem.portraitWikiUrl} />

        <TemtemTypes types={temtem.types} size="small" />
      </Styled.Button>
    </Styled.Container>
  );
};

export default TemtemCard;
