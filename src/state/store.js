import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "state/auth/registerSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
