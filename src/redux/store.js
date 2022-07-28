import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';




const persistConfig = {
  key: 'root',
  version: 1,
  storage:AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    cart:persistedReducer
  }
});

