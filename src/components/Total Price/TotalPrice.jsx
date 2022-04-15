import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./totalPrice.css";

function TotalPrice() {
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  let [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    let total = 0;
    let totalP = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total = total + +cartItems[i].productCount * +cartItems[i].pizzaPrice;
      totalP = totalP + +cartItems[i].productCount;
    }
    setTotalProducts(totalP);
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <div className='total-div'>
      <table className='total-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price(&#8377;)</th>
            <th></th>
            <th>Count</th>
            <th></th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length
            ? cartItems.map((pizza,index) => {
                return (
                  <tr className='pizza-price-details' key={index}>
                    <td>{pizza.pizzaName}</td>
                    <td>{pizza.pizzaPrice} &#8377;</td>
                    <td>
                      <i className='fa-solid fa-xmark'></i>
                    </td>
                    <td>{pizza.productCount} </td>
                    <td> = </td>
                    <td>{pizza.productCount * pizza.pizzaPrice} &#8377;</td>
                  </tr>
                );
              })
            : ""}
          <tr>
            <td>Total items - {totalProducts}</td>
            <td>Total Price - {totalPrice} &#8377;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalPrice;
