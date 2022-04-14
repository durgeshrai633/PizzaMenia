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
      let add = true;
      if (state.cartItems.length > 0) {
        state.cartItems.forEach((pizza) => {
          if (payload.id == pizza.id) {
            console.log("hi");
            pizza.productCount = payload.productCount;
            add = false;
          }
        });
      }
      if (add) state.cartItems.push(payload);
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
