import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    totalPrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((a) => {
        sum = sum + a.pizzaPrice;
      });
      state.totalPrice = sum;
    },
  },
});

export const { addToCart, totalPrice } = cartSlice.actions;

export default cartSlice.reducer;

// http://localhost:3000/
