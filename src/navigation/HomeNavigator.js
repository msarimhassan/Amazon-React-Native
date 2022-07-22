import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "../common";
import HomeScreen from "../screens/app/home";
import ProductsScreen from "../screens/app/products";
import ProductdetailScreen from '../screens/app/productDetails';

const Screen = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
      <Screen.Navigator
        initialRouteName={'Home'}
        screenOptions={{headerShown: false}}>
        <Screen.Screen name={'Home'} component={HomeScreen} />
        <Screen.Screen name={Routes.Products} component={ProductsScreen} />
        <Screen.Screen name={Routes.SingleProduct} component={ProductdetailScreen} />
      </Screen.Navigator>
    );
}

export default HomeNavigator;