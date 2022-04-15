import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../Store/cartSlice";

function CartCard({ pizza }) {
  const dispatch = useDispatch();
  return (
    <div className='card'>
      <img src={pizza.pizzaImage} alt='' />
      <p className='pizza-name'>{pizza.pizzaName}</p>
      <p className='pizza-price'>{pizza.pizzaPrice} &#8377;</p>
      <i
        className='fa-solid fa-trash'
        onClick={() => {
          console.log("hi");
          dispatch(deleteCartItem(pizza));
        }}
      ></i>
      <span className='cart-product-count'>
        <i className='fa-solid fa-xmark'></i>
        <span className='text-large'>{pizza.productCount}</span>
      </span>
    </div>
  );
}

export default CartCard;
