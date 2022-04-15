import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pizza: [
    {
      id: 1,
      pizzaName: "Margreta Pizza",
      pizzaImage: "/images/first.jpg",
      pizzaPrice: 199,
    },
    {
      id: 2,
      pizzaName: "Cheeze Pizza",
      pizzaImage: "/images/second.jpg",
      pizzaPrice: 299,
    },
    {
      id: 3,
      pizzaName: "Burst Pizza",
      pizzaImage: "/images/third.jpg",
      pizzaPrice: 99,
    },
    {
      id: 4,
      pizzaName: "Italian Pizza",
      pizzaImage: "/images/fourth.jpg",
      pizzaPrice: 499,
    },
    {
      id: 5,
      pizzaName: "Crusty Pizza",
      pizzaImage: "/images/fifth.jpg",
      pizzaPrice: 179,
    },
    {
      id: 6,
      pizzaName: "Corn Pizza",
      pizzaImage: "/images/sixth.jpg",
      pizzaPrice: 79,
    },
    {
      id: 7,
      pizzaName: "Paneer Pizza",
      pizzaImage: "/images/seventh.jpg",
      pizzaPrice: 319,
    },
    {
      id: 8,
      pizzaName: "Maharaja Pizza",
      pizzaImage: "/images/eight.jpg",
      pizzaPrice: 599,
    },
    {
      id: 9,
      pizzaName: "Fries Pizza",
      pizzaImage: "/images/ningth.jpg",
      pizzaPrice: 159,
    },
    {
      id: 10,
      pizzaName: "Malamal Pizza",
      pizzaImage: "/images/tength.jpg",
      pizzaPrice: 299,
    },
    {
      id: 11,
      pizzaName: "Cousine Pizza",
      pizzaImage: "/images/eleventh.jpg",
      pizzaPrice: 699,
    },
    {
      id: 12,
      pizzaName: "Creame Pizza",
      pizzaImage: "/images/twelth.jpg",
      pizzaPrice: 499,
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
