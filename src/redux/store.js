import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './auth/registerSlice'

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
