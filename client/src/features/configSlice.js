import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    serverUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
  },
});

export default configSlice.reducer;
