import React from "react";
import { useState } from "react";

export const CartContext = React.createContext({
  items: [],
  totalAmout: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = (props) => {
  const addItemToCartHandler = (data) => {
    const idx = cartItems.findIndex((item) => item.id === data.id);

    if (idx === -1) {
      setCartItems((prev) => {
        return [...prev, data];
      });
    } else {
      setCartItems((prev) => {
        return [
          ...prev,
          { ...prev[idx], amount: prev[idx].amount + data.amount },
        ];
      });
    }
  };
  const removeItemFromCartHandler = () => {};
  const cartContext = {
    items: [],
    totalAmout: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
