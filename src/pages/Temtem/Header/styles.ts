import styled from 'styled-components/native';

import Header from '../../../components/Header';

const Container = styled(Header)``;

const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export default { Container, GoBackButton };
