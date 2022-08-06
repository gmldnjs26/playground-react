import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const onRemoveCartItem = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={onRemoveCartItem.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const [isShowCheckout, setIsShowCheckout] = useState(false);
  const onReadyCheckout = () => {
    setIsShowCheckout(true);
  };
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>${cartContext.totalPrice.toFixed(2)}</span>
      </div>
      {isShowCheckout && <Checkout />}
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button--alt"]}>
          Close
        </button>
        {!isShowCheckout ? (
          <button onClick={onReadyCheckout} className={classes.button}>
            Order
          </button>
        ) : (
          <button onClick={onReadyCheckout} className={classes.button}>
            Confirm
          </button>
        )}
      </div>
      <div></div>
    </Modal>
  );
};

export default Cart;
