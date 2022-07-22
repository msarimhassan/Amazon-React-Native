import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/app/home';
import CartScreen from '../screens/app/cart';
import { Routes,Icons } from '../common';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const [route, setRoute] = useState('Home');
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        listeners={{tabPress: e => setRoute('Home')}}
        options={{
          tabBarIcon: () => (
            <Icons.Feather
              name="home"
              size={25}
              color={route === 'Home' ? '#20B2AA' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Cart}
        component={CartScreen}
        listeners={{tabPress: e => setRoute('Cart')}}
        options={{
          tabBarBadge: 3,
          tabBarIcon: () => (
            <Icons.AntDesign
              name="shoppingcart"
              size={25}
              color={route === 'Cart' ? '#20B2AA' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default AppNavigator;