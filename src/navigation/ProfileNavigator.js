import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routes } from '../common';
import ProfileScreen from '../screens/app/ProfileScreen';

const Screen = createNativeStackNavigator();

const ProfileNavigator = () => {
   return <Screen.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.profileScreen}>
        <Screen.Screen name={Routes.profileScreen} component={ProfileScreen} />
    </Screen.Navigator>;
}

export default ProfileNavigator