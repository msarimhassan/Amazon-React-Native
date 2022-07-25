import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import CartScreen from '../screens/app/CartScreen';
import {Routes, Icons,Colors} from '../common';
import {AppHeader} from '../components';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <AppHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: Colors.activeTint,
        }}>
        <Tab.Screen
          name={Routes.Home}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.Feather
                name="home"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Cart}
          component={CartScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="shoppingcart"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
