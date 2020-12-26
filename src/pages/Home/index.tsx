import React from 'react';

import Header from '../../components/Header';
import Text from '../../components/Text';
import { useTemtems } from '../../hooks';

import Styled from './styles';

const Home: React.FC = () => {
  const { temtems } = useTemtems();

  return (
    <Styled.Container>
      <Header>
        <Text variant="title">TemtemDex</Text>
      </Header>

      <Styled.TemtemsList
        data={temtems}
        keyExtractor={temtem => temtem.number.toString()}
        renderItem={({ item }) => <Text>{item.name} </Text>}
        numColumns={2}
      />
    </Styled.Container>
  );
};

export default Home;
