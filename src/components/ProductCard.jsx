import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, totalPrice } from "../Store/cartSlice";

function ProductCard({ pizza }) {
  const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();
  const cartButton = useRef();
  const addPizzaToCart = (pizza) => {
    if (productCount) {
      dispatch(addToCart({ ...pizza, productCount }));
      cartButton.current.disabled = true;
    } else {
      alert("Please add at least a pizza");
    }
  };
  const decreaseProductCount = () => {
    if (productCount > 0) {
      setProductCount((prev) => prev - 1);
    }
  };
  const increaseProductCount = () => {
    if (productCount < 5) {
      setProductCount((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (productCount && cartButton.current.disabled) {
      dispatch(addToCart({ ...pizza, productCount }));
    }
  }, [productCount]);
  return (
    <div className='card'>
      <img src={pizza.pizzaImage} alt='' />
      <p className='pizza-name'>{pizza.pizzaName}</p>
      <p className='pizza-price'>{pizza.pizzaPrice}</p>
      <button
        className='btn add-to-cart-btn'
        onClick={() => addPizzaToCart(pizza)}
        ref={cartButton}
      >
        Add to Cart
      </button>
      <div className='product-counter'>
        <button
          className='btn counter-btn'
          onClick={() => decreaseProductCount()}
        >
          -
        </button>
        <span>{productCount}</span>
        <button
          className='btn counter-btn'
          onClick={() => increaseProductCount()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
