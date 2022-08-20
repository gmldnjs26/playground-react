import { cartActions, uiActions } from ".";

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

export const loadCartItems = () => {
  return async (dispatch) => {
    const fetchCartItems = async () => {
      const res = await fetch("http://localhost:7070/api/carts");
      const data = await res.json();
      return data;
    };
    const cartItems = await fetchCartItems();
    dispatch(cartActions.loadItems(cartItems));
  };
};
