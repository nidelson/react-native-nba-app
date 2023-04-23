import React from 'react';
import { StatusBar, Text, View } from 'react-native';

export function App(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-900">
      <StatusBar style="auto" />
      <Text className="text-4xl font-bold text-gray-700 dark:text-white">
        Welcome to NBA
      </Text>
    </View>
  );
}
