import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  item: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const targetIdx = state.item.findIndex(
        (e) => e.productId === action.payload.id
      );
      if (targetIdx !== -1) {
        state.item[targetIdx].amount++;
      } else {
        state.item.push({
          productId: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          amount: 1,
        });
      }
    },
    incrementAmount(state, action) {
      const targetIndex = state.item.findIndex(
        (e) => e.productId === action.payload
      );
      state.item[targetIndex].amount = state.item[targetIndex].amount + 1;
    },
    decrementAmount(state, action) {
      const targetIndex = state.item.findIndex(
        (e) => e.productId === action.payload
      );
      state.item[targetIndex].amount = state.item[targetIndex].amount - 1;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export default store;
