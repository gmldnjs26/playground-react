import React, { useReducer } from "react";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
  totalPrice: 0,
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAV":
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: () => {},
});

export const ProductsContextsProvider = (props) => {
  const [productsState, dispatchProductsAction] = useReducer(
    productsReducer,
    initialState
  );

  console.log("productsState", productsState);

  const toggleFavHandler = (id) => {
    dispatchProductsAction({ type: "TOGGLE_FAV", productId: id });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsState.products, toggleFav: toggleFavHandler }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
