import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';

import LoginScreen from './src/screens/container/LoginScreen';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/*<PaperProvider>*/}
        <NavigationContainer>
          <SwitchNavigator />
        </NavigationContainer>
      {/*</PaperProvider>*/}
    </QueryClientProvider>
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  Navigation: Navigation,
}, {
  initialRouteName: "LoginScreen"
});