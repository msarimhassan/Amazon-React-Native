import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import CartNavigator from './CartNavigator';
import ChatNavigator from './ChatNavigator';
import {Routes, Icons,Colors} from '../common';
import {AppHeader} from '../components';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  let product = useSelector(state => state.cart.cartProducts);
  return (
    <>
      <AppHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: Colors.activeTint,
          tabBarHideOnKeyboard: true,
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
          component={CartNavigator}
          options={{
            tabBarBadge:product.length,
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="shoppingcart"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.chat}
          component={ChatNavigator}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="message1"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.profile}
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="user"
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
