import { useDispatch, useSelector } from "react-redux";

import { toggleCartActions } from "../../store/toggleCart";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((state) => state.cartItems.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCartActions.toggleCartState());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
