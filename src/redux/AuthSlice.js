import {createSlice} from '@reduxjs/toolkit';
import {setToken, removeToken} from '../utils/Storage';

const initialState = {
  token: null,
  user: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.customer;
      setToken(action.payload.token);
    },
    Logout: (state, action) => {
      state.token = null;
      state.user = null;
      removeToken();
    },
  },
});

export const {Login, Logout} = AuthSlice.actions;

export default AuthSlice.reducer;
