import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmout = cartContext.items.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmout}</span>
    </div>
  );
};

export default HeaderCartButton;
