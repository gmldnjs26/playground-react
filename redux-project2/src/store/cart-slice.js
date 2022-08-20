import { createSlice } from "@reduxjs/toolkit";
import { cartActions, uiActions } from ".";
const initialCartState = {
  item: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
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
      if (state.item[targetIndex].amount === 1) {
        state.splice(targetIndex, 1);
      } else {
        state.item[targetIndex].amount = state.item[targetIndex].amount - 1;
      }
    },
  },
});

export const sendCartItem = (cartItem) => {
  return async (dispatch) => {
    const addCartItem = async () => {
      await fetch("http://localhost:7070/api/carts", {
        method: "POST",
        body: JSON.stringify({
          title: cartItem.title,
          description: cartItem.description,
          price: cartItem.price,
          amount: 1,
        }),
      });
    };
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart item",
      })
    );
    try {
      await addCartItem();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Success!!!!!",
        })
      );
      // dispatch(cartSlice.cartActions.addItem(cartItem));
      //  아직 actions가 생성전이라 이렇게 사용할 수 없다.
      dispatch(cartActions.addItem(cartItem));
    } catch (err) {
      console.error(err);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error!!!!!",
        })
      );
    }
  };
};
