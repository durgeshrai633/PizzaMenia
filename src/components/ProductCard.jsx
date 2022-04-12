import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, totalPrice } from "../Store/cartSlice";

function ProductCard({ pizza }) {
  const dispatch = useDispatch();
  const addPizzaToCart = (pizza) => {
    dispatch(addToCart(pizza));
    dispatch(totalPrice());
  };
  return (
    <div className='card'>
      <img src={pizza.pizzaImage} alt='' />
      <p className='pizza-name'>{pizza.pizzaName}</p>
      <p className='pizza-price'>{pizza.pizzaPrice}</p>
      <button
        className='btn add-to-cart-btn'
        onClick={() => addPizzaToCart(pizza)}
      >
        Add to Cart
      </button>
    </div>
    
  );
}

export default ProductCard;
