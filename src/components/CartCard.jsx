import React from "react";

function CartCard({ pizza }) {
  return (
    <div className='card'>
      <img src={pizza.pizzaImage} alt='' />
      <p className='pizza-name'>{pizza.pizzaName}</p>
      <p className='pizza-price'>{pizza.pizzaPrice}</p>
    </div>
  );
}

export default CartCard;
