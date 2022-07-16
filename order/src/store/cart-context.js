import React from "react";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existedUpdateCartItemIdx = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    if (existedUpdateCartItemIdx !== -1) {
      const existingCartItem = state.items[existedUpdateCartItemIdx];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existedUpdateCartItemIdx] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItemIdx = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItem = state.items[updatedItemIdx];
    let updatedItems = [...state.items];
    if (updatedItem.amount === 1) {
      updatedItems.splice(updatedItemIdx, 1);
    } else {
      updatedItems[updatedItemIdx].amount--;
    }

    const updatedTotalPrice = updatedItems.reduce(
      (a, b) => a + b.price * b.amount,
      0
    );
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  return defaultCartState;
};

export const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
