import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../common';
import ProfileScreen from '../screens/app/ProfileScreen';
import OrderScreen from '../screens/app/OrderScreen';
import CardScreen from '../screens/app/CardScreen';
import AddressScreen from '../screens/app/AddressScreen';
import EditProfileScreen from '../screens/app/EditProfileScreen';
import MyOrderScreen from '../screens/app/MyOrderScreen';
import SelectLanguageScreen from '../screens/app/SelectLanguageScreen';
import AddressFormScreen from '../screens/app/AddressFormScreen';
import CardFormScreen from '../screens/app/CardFormScreen';
import ChatScreen from '../screens/app/ChatScreen';

const Screen = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Screen.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.profileScreen}>
      <Screen.Screen name={Routes.profileScreen} component={ProfileScreen} />
      <Screen.Screen name={Routes.editProfile} component={EditProfileScreen} />
      <Screen.Screen name={Routes.orderScreen} component={OrderScreen} />
      <Screen.Screen name={Routes.cardScreen} component={CardScreen} />
      <Screen.Screen name={Routes.addressScreen} component={AddressScreen} />
      <Screen.Screen name={Routes.myOrder} component={MyOrderScreen} />
      <Screen.Screen name={Routes.addressForm} component={AddressFormScreen} />
      <Screen.Screen name={Routes.cardForm} component={CardFormScreen} />
      <Screen.Screen
        name={Routes.selectLanguage}
        component={SelectLanguageScreen}
      />
      <Screen.Screen name={Routes.chatScreen} component={ChatScreen} />
    </Screen.Navigator>
  );
};

export default ProfileNavigator;
