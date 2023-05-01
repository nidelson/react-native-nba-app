import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function CustomTabBar(props: BottomTabBarProps) {
  return (
    <BlurView
      blurType="dark"
      // blurType="light"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      blurAmount={10}
      blurRadius={25}
      reducedTransparencyFallbackColor={'pink'}
      overlayColor="transparent"
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
}
