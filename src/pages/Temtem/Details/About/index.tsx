import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';

const About: React.FC = () => {
  const navigate = useNavigation();

  return (
    <View>
      <Button onPress={() => navigate.goBack()} title="a" />
    </View>
  );
};

export default About;
