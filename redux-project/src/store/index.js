import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, isLogin: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + (action.payload || 1);
    },
    decrement(state, action) {
      state.counter = state.counter - (action.payload || 1);
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export default store;
