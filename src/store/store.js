import { configureStore } from '@reduxjs/toolkit';
import { ENV } from '../config/config';
import userReducer from './slices/user';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: ENV !== 'production',
});
