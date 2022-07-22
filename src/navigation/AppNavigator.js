import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/app/home';
import CartScreen from '../screens/app/cart';
import { Routes,Icons } from '../common';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name={Routes.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icons.Feather name="home" size={25} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.Cart}
          component={CartScreen}
          options={{
            tabBarIcon: () => (
              <Icons.AntDesign name="shoppingcart" size={25} color="#000" />
            ),
          }}
        />
      </Tab.Navigator>
    );
}



export default AppNavigator;