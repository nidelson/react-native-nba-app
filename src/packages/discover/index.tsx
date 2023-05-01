import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export function DiscoverScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center bg-slate-100 dark:bg-slate-900">
      <Text className="text-4xl text-center font-bold text-gray-700 dark:text-white">
        Discover
      </Text>
    </SafeAreaView>
  );
}
