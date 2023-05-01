import React from 'react';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens, enableFreeze } from 'react-native-screens';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

enableScreens();
enableFreeze(true);

export function App(): JSX.Element {
  const onReadyNavigation = () => {
    console.log('onReady Navigation');
  };

  const onStateChangeNavigation = () => {
    console.log('onStateChange Navigation');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView className="flex-1 border-blue-700 justify-center bg-slate-100 dark:bg-slate-900">
          <NavigationContainer
            onStateChange={onStateChangeNavigation}
            onReady={onReadyNavigation}
          >
            <StatusBar style="auto" />
            <Text className="text-4xl text-center font-bold text-gray-700 dark:text-white">
              Welcome to NBA
            </Text>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
