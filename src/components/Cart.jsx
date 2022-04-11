import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "./AuthForm";

function Cart() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.auth);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const doCheckOut = () => {
    if (isAuth) {
      console.log("You are logged in");
    } else {
      setShowAuthForm(!isAuth);
      console.log("You are not logged in");
    }
  };
  console.log(cartItems, totalPrice);
  return (
    <section>
      <div className='pizza'>
        {cartItems.map((pizza, index) => {
          return (
            <div className='card' key={pizza.id}>
              <img src={pizza.pizzaImage} alt='' />
              <p>{pizza.pizzaName}</p>
              <p>{pizza.pizzaPrice}</p>
            </div>
          );
        })}
      </div>
      <button className='btn' onClick={() => doCheckOut()}>
        CheckOut
      </button>
      {showAuthForm && <AuthForm></AuthForm>}
    </section>
  );
}

export default Cart;
