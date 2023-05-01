import React from 'react';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView className="flex-1 border-blue-700 justify-center bg-slate-100 dark:bg-slate-900">
          <StatusBar style="auto" />
          <Text className="text-4xl text-center font-bold text-gray-700 dark:text-white">
            Welcome to NBA
          </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
