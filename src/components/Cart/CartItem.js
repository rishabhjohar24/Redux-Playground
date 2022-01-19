import { useDispatch } from "react-redux";

import { cartItemActions } from "../../store/cartItems";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const onAddItemHandler = () => {
    dispatch(cartItemActions.addItemToCart({ id, title, price }));
  };

  const onRemoveItemHandler = () => {
    dispatch(cartItemActions.removeItemFromCart(id));
  };
  return (
    <li className={classes.item} id={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItemHandler}>-</button>
          <button onClick={onAddItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
