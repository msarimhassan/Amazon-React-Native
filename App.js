import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, AppNavigator} from './src/navigation';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  const [token, setToken] = useState();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AuthNavigator/> */}
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
