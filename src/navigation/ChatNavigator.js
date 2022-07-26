import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screens/app/ChatScreen';
import {Routes} from '../common'

const Screen = createNativeStackNavigator();

const ChatNavigator = () => {
    return (
      <Screen.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.chatScreen}>
        <Screen.Screen name={Routes.chatScreen} component={ChatScreen} />
      </Screen.Navigator>
    );
}

export default ChatNavigator;