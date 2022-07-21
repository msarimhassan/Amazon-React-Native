import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from '../screens/auth';
import { Routes } from '../common';

const Stack=createNativeStackNavigator()

const AuthNavigator = () => {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
    </Stack.Navigator>   
}

export default AuthNavigator;
