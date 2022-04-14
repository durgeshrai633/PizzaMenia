import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let add = true;
      if (state.cartItems.length > 0) {
        state.cartItems.forEach((pizza) => {
          if (payload.id === pizza.id) {
            console.log("hi");
            pizza.productCount = payload.productCount;
            add = false;
          }
        });
      }
      if (add) state.cartItems.push(payload);
    },
    deleteCartItem: (state, { payload }) => {
      for (let i = 0; i < state.cartItems.length; i++) {
        console.log(payload);
        if (state.cartItems[i].id === payload.id) {
          state.cartItems.splice(i, 1);
          break;
        }
      }
    },
    eraseCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, deleteCartItem, eraseCart } = cartSlice.actions;

export default cartSlice.reducer;

// http://localhost:3000/
