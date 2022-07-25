import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routes } from '../common';
import ProfileScreen from '../screens/app/ProfileScreen';
import OrderScreen from '../screens/app/OrderScreen';
import CardScreen from '../screens/app/CardScreen';
import AddressScreen from '../screens/app/AddressScreen';

const Screen = createNativeStackNavigator();

const ProfileNavigator = () => {
   return (
     <Screen.Navigator
       screenOptions={{headerShown: false}}
       initialRouteName={Routes.profileScreen}>
       <Screen.Screen name={Routes.profileScreen} component={ProfileScreen} />
       <Screen.Screen name={Routes.orderScreen} component={OrderScreen} />
       <Screen.Screen name={Routes.cardScreen} component={CardScreen} />
       <Screen.Screen name={Routes.addressScreen} component={AddressScreen} />
     </Screen.Navigator>
   );
}

export default ProfileNavigator