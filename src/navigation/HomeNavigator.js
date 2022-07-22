import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "../common";
import HomeScreen from "../screens/app/home";

const Screen = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
      <Screen.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false}}>
            <Screen.Screen name={'Home'} component={HomeScreen} />
            
      </Screen.Navigator>
    );
}

export default HomeNavigator;