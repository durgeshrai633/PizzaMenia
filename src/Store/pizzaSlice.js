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
    {
      id: 4,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 5,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 6,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 7,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 8,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 9,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 10,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 11,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 400,
    },
    {
      id: 12,
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
