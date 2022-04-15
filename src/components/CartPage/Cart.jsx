import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import "./cart.css";
import TotalPrice from "../Total Price/TotalPrice";
import { eraseCart } from "../../Store/cartSlice";
function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loadScript = (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve("Done");
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const navigate = useNavigate();
  const doCheckOut = async () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = total + +cartItems[i].productCount * +cartItems[i].pizzaPrice;
    }
    if (isAuth && total) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) alert("nerwork error");
      const options = {
        key: "rzp_test_zPNcPWqQZX7n9Z",
        currency: "INR",
        amount: total * 100,
        name: "Pizza Menia",
        description: "Heloo",
        handler: (res) => {
          alert("Payment Succesful");
          dispatch(eraseCart());
        },
        prefill: {
          name: "hi",
        },
      };
      const payment = new window.Razorpay(options);
      payment.open();
    } else {
      navigate("/login");
    }
  };
  return (
    <section className='cart'>
      <h1 className='text-large accent'>Your Cart</h1>
      <div className='cards'>
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
      <TotalPrice></TotalPrice>
      <div className='' style={{ textAlign: "center", margin: "30px 0" }}>
        <button className='btn checkout-btn' onClick={() => doCheckOut()}>
          CheckOut
        </button>
      </div>
    </section>
  );
}

export default Cart;
