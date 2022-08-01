import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/app/CartScreen';
import DetailsScreen from '../screens/app/DetailsScreen';
import OrderDetailScreen from '../screens/app/OrderDetailScreen';
import ConfirmOrderScreen from '../screens/app/ConfirmOrderScreen';

import {Routes} from '../common';

const Screen = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Screen.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.cartScreen}>
      <Screen.Screen name={Routes.cartScreen} component={CartScreen} />
      <Screen.Screen name={Routes.Details} component={DetailsScreen} />
      <Screen.Screen name={Routes.Orderdetails} component={OrderDetailScreen} />
      <Screen.Screen name={Routes.confirmOrder} component={ConfirmOrderScreen}/>
    </Screen.Navigator>
  );
};

export default CartNavigator;
