import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  auth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    loggedIn(state){
      state.auth = true;
    },
    loggedOut(state){
      state.auth = false;
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;