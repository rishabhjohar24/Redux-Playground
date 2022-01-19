import { configureStore } from "@reduxjs/toolkit";

import toggleCartReducer from "./toggleCart";
import cartItemsReducer from "./cartItems";

const store = configureStore({
  reducer: { toggleCart: toggleCartReducer, cartItems: cartItemsReducer },
});

export default store;
