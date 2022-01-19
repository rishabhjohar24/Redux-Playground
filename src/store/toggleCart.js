import { createSlice } from "@reduxjs/toolkit";

const initialCart = { isCartVisible: false, notifications: null };

const toggleCartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    showNotifications(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleCartState(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
