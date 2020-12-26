import React from 'react';

import { TemtemType } from '../../types';

import Styled from './styles';

interface TemtemTypesProps {
  types: TemtemType[];
  size: 'regular' | 'small';
}

const TemtemTypes: React.FC<TemtemTypesProps> = ({ size, types }) => {
  return (
    <Styled.Container size={size}>
      {types.map(type => (
        <Styled.Type size={size} key={String(type)}>
          <Styled.TypeText size={size}>{type}</Styled.TypeText>
        </Styled.Type>
      ))}
    </Styled.Container>
  );
};

export default TemtemTypes;
