import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, totalPrice } from "../Store/cartSlice";
import "./home.css";
function Home() {
  const { pizza } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  const addPizzaToCart = (pizza) => {
    dispatch(addToCart(pizza));
    dispatch(totalPrice());
  };
  return (
    <section id='home'>
      <div className='pizza'>
        {pizza.length &&
          pizza.map((pizza) => {
            return (
              <div className='card' key={pizza.id}>
                <img src={pizza.pizzaImage} alt='' />
                <p>{pizza.pizzaName}</p>
                <p>{pizza.pizzaPrice}</p>
                <button className='btn' onClick={() => addPizzaToCart(pizza)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Home;
