import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { HomeScreen } from '../../home';
import { DiscoverScreen } from '../../discover';

import { Routes } from './routes';
import { CustomTabBar } from './CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={[]}>
      <Tab.Navigator
        initialRouteName={Routes.TabHome}
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {
            activeTintColor: '#f00',
            // borderTopColor: '#00000099',
            borderTopColor: 'transparent',
            paddingTop: 8,
            paddingBottom: 24,
            marginBottom: 8,
            backgroundColor: 'transparent',
          },
        })}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name={Routes.TabHome}
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <IconAntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.TabDiscover}
          component={DiscoverScreen}
          options={{
            title: 'Discover',
            tabBarIcon: ({ color, size }) => (
              <IconAntDesign name="find" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
