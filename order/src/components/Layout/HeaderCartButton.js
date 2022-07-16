import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Icons/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmout = cartContext.items.reduce((sum, i) => sum + i.amount, 0);
  const [isUpdatingCartItem, setIsUpdatingCartItem] = useState(false);
  useEffect(() => {
    setIsUpdatingCartItem(true);
    const timer = setTimeout(() => {
      setIsUpdatingCartItem(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);
  const btnClasses = `${classes.button} ${
    isUpdatingCartItem ? classes.bump : ""
  }`;

  return (
    <div className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmout}</span>
    </div>
  );
};

export default HeaderCartButton;
