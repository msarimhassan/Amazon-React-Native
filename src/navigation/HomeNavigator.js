import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from '../common';
import HomeScreen from '../screens/app/HomeScreen';
import ProductsScreen from '../screens/app/ProductScreen';
import ProductdetailScreen from '../screens/app/ProductDetailScreen';
import DetailsScreen from '../screens/app/DetailsScreen';

const Screen = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Screen.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Screen.Screen name={'Home'} component={HomeScreen} />
      <Screen.Screen name={Routes.Products} component={ProductsScreen} />
      <Screen.Screen name={Routes.SingleProduct} component={ProductdetailScreen}/>
      <Screen.Screen name={Routes.Details} component={DetailsScreen} />
    </Screen.Navigator>
  );
};

export default HomeNavigator;
