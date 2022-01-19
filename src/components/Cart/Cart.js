import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((Item) => (
          <CartItem
            key={Item.id}
            item={{
              id: Item.id,
              title: Item.name,
              quantity: Item.quantity,
              total: Item.totalPrice,
              price: Item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
