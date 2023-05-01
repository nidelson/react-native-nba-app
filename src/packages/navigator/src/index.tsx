import { NavigationContainer } from '@react-navigation/native';

import { TabNavigator } from './TabNavigator';

export function Navigator() {
  const onReadyNavigation = () => {
    console.log('onReady Navigation');
  };

  const onStateChangeNavigation = () => {
    console.log('onStateChange Navigation');
  };

  return (
    <NavigationContainer
      onStateChange={onStateChangeNavigation}
      onReady={onReadyNavigation}
    >
      <TabNavigator />
    </NavigationContainer>
  );
}
