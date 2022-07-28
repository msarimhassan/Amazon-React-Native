import {createSlice} from '@reduxjs/toolkit';
import {setToken,removeToken} from '../utils/Storage';

const initialState = {
  token: null,
  user: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Login: async (state, action) => {
      state.token = action.payload.token;
      await setToken(token);
      state.user = action.payload.customer;
    },
    Logout: async(state, action) => {
      state.token = null;
      state.user = null;
     await removeToken();
    },
  },
});

export const { Login, Logout } = AuthSlice.actions;

export default AuthSlice.reducer;
