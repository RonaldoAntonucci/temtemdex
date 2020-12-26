import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import theme from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" translucent />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
