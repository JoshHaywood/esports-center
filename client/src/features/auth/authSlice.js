import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "./getUserData";

export const getUser = createAsyncThunk("auth/getUser", async (config) => {
  const response = await getUserData(config);
  console.log(response.data);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    set: (state, action) => {
      state.user = action.payload;
    },
    reset: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { set, reset } = authSlice.actions;
export default authSlice.reducer;
