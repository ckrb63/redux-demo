import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const countInitialState = {
  counter: 0,
  showCounter: true,
};
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
const counterSlice = createSlice({
  name: "counter",
  initialState: countInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    auth : authSlice.reducer,
  }
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
