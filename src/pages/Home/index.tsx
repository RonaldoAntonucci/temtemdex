import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Loading from '../../components/Loading';
import { useTemtems } from '../../hooks';

import TemtemCard from './TemtemCard';
import Styled from './styles';

const Home: React.FC = () => {
  const { temtems, isLoading } = useTemtems();

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <Styled.Container>
      <Header>
        <Text variant="title">TemtemDex</Text>
      </Header>

      <Styled.TemtemsList
        data={temtems}
        keyExtractor={temtem => temtem.number.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 24 }}
        renderItem={({ item, index }) => (
          <TemtemCard
            temtem={item}
            afterThirdCard={!!(index + 2)}
            rightCard={!!(index % 2)}
          />
        )}
        numColumns={2}
      />
    </Styled.Container>
  );
};

export default Home;
