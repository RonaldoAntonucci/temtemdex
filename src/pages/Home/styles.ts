import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Temtem } from '../../types';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const TemtemsList = styled(FlatList as new () => FlatList<Temtem>)`
  flex: 1;
  margin-top: 8px;
`;

export default { Container, TemtemsList };
