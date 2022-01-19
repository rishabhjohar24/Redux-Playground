import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice -= existingItems.price;
      }
    },
  },
});

export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;
