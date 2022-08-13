import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // 원래있던 상태를 가져오는게 아니라 Immer라는 패키지를 이용해 복사된 값을 가져온다.
      state.counter = state.counter + (action.payload || 1);
    },
    decrement(state, action) {
      state.counter = state.counter - (action.payload || 1);
    },
  },
});

export default counterSlice;
