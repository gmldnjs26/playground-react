import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
