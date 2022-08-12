import { configureStore } from "@reduxjs/toolkit";
import configReducer from "../features/configSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    config: configReducer,
    auth: authReducer,
  },
});
