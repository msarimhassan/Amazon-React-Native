import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, AppNavigator} from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const App = () => {
  const [token, setToken] = useState();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            {/* <AuthNavigator/> */}
            <AppNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
