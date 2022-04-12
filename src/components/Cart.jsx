import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import "./cart.css"
function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const doCheckOut = () => {
    if (isAuth) {
      alert("You are checked out");
    } else {
      navigate("/login");
    }
  };
  console.log(isAuth);
  return (
    <section className="cart">
      <div className='pizza'>
        {cartItems.length ? (
          cartItems.map((pizza, index) => {
            return <CartCard key={pizza.id} pizza={pizza}></CartCard>;
          })
        ) : (
          <>
            <h1 style={{ display: "block" }}>
              No Items In your cart. <Link to={"/"}>See Products</Link>
            </h1>
          </>
        )}
      </div>
      <div className='' style={{ textAlign: "center", margin: "30px 0" }}>
        <button className='btn checkout-btn' onClick={() => doCheckOut()}>
          CheckOut
        </button>
      </div>
    </section>
  );
}

export default Cart;
