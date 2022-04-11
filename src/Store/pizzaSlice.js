import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pizza: [
    {
      id: 1,
      pizzaName: "Margreta Pizza",
      pizzaImage: "/images/first.jpg",
      pizzaPrice: 200,
    },
    {
      id: 2,
      pizzaName: "Cheeze Pizza",
      pizzaImage: "/images/second.jpg",
      pizzaPrice: 300,
    },
    {
      id: 3,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
  ],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizza: (state, payload) => {
      return state;
    },
  },
});

export const { addPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
