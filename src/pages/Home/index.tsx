import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Animated, Alert } from 'react-native';

import Header from '../../components/Header';
import Text from '../../components/Text';
import Loading from '../../components/Loading';
import { useTemtems } from '../../hooks';

import TemtemCard from './TemtemCard';
import Styled from './styles';

const Home: React.FC = () => {
  const { temtems, isLoading, loadTemtems } = useTemtems();
  const [refreshing, setRefreshing] = useState(false);

  const opacity = useMemo(() => new Animated.Value(0), []);
  const translateY = useMemo(() => new Animated.Value(50), []);

  const ListFooterComponent = useMemo(
    () => (isLoading ? <Loading style={{ marginVertical: 8 }} /> : <></>),
    [isLoading],
  );

  useEffect(() => {
    loadTemtems()
      .then(() => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),

          Animated.timing(translateY, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]).start();
      })
      .catch(() => {
        Alert.alert(
          'Fail to get Temtems',
          'An error has ocurred when try to load the Temtems, please try again.',
        );
      });
  }, [loadTemtems, opacity, translateY]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadTemtems()
      .then(() => {
        setRefreshing(false);
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),

          Animated.timing(translateY, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]).start();
      })
      .catch(() => {
        setRefreshing(false);
        Alert.alert(
          'Fail to get Temtems',
          'An error has ocurred when try to load the Temtems, please try again.',
        );
      });
  }, [loadTemtems, opacity, translateY]);

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
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={ListFooterComponent}
        onEndReachedThreshold={0.1}
        renderItem={({ item, index }) => (
          <TemtemCard
            temtem={item}
            afterThirdCard={!!(index + 2)}
            rightCard={!!(index % 2)}
            opacity={opacity}
          />
        )}
        numColumns={2}
      />
    </Styled.Container>
  );
};

export default Home;
