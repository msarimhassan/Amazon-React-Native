import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import authReducer from './AuthSlice';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import {combineReducers} from 'redux';




const persistConfig = {
  key: 'root',
  version: 1,
  storage:AsyncStorage,
};

const reducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig,reducer);


export const store = configureStore({
  reducer:persistedReducer
});

