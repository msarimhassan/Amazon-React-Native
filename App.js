import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigator} from './src/navigation';

const App = () => {
  const [token, setToken] = useState();
  return <NavigationContainer>
            <AuthNavigator/>
    </NavigationContainer>
}



export default App;