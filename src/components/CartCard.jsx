import React from "react";

function CartCard({ pizza }) {
  return (
    <div className='card'>
      <img src={pizza.pizzaImage} alt='' />
      <p className='pizza-name'>{pizza.pizzaName}</p>
      <p className='pizza-price'>{pizza.pizzaPrice}</p>
      <i class='fa-solid fa-trash'></i>
      <span className='cart-product-count'>
        <i class='fa-solid fa-xmark'></i>
        <span className="text-large">{pizza.productCount}</span>
      </span>
    </div>
  );
}

export default CartCard;
