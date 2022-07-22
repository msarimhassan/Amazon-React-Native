import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigator,AppNavigator} from './src/navigation';

const App = () => {
  const [token, setToken] = useState();
  return <NavigationContainer>
    {/* <AuthNavigator/> */}
    <AppNavigator/>
    </NavigationContainer>
}



export default App;