import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens, enableFreeze } from 'react-native-screens';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { Navigator } from './packages/navigator/src';

enableScreens();
enableFreeze(true);

export function App(): JSX.Element {
  console.log('Starting App...');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle={'default'} />
        <Navigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
