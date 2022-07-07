import 'react-native-gesture-handler';
import { useCallback, useEffect, useState } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      setStatusBarBackgroundColor('#5636D3', false);
      NavigationBar.setBackgroundColorAsync('#FFFFFF');
      NavigationBar.setButtonStyleAsync('dark');
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView
      onLayout={onLayoutRootView}
      style={{
        flex: 1
      }}
    >
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#121015" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider >
      <FlashMessage position="top" />
    </GestureHandlerRootView>
  );
}
