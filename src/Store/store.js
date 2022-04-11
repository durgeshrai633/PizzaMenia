import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import pizzaSlice from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});
