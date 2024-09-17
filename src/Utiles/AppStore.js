import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});