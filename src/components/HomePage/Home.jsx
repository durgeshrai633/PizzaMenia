import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import ProductCard from "./ProductCard";
function Home() {
  const { pizza } = useSelector((state) => state.pizza);
  const [pizzas, setPizzas] = useState([...pizza]);
  const doSort = (e) => {
    if (e.target.value == "asc") {
      console.log(pizzas[0]);
      setPizzas((prev) => [
        ...prev.sort((p1, p2) => p1.pizzaPrice - p2.pizzaPrice),
      ]);
    } else {
      setPizzas((prev) => [
        ...prev.sort((p1, p2) => p2.pizzaPrice - p1.pizzaPrice),
      ]);
    }
  };
  return (
    <section id='home'>
      <h1 className='heading'>Your Faviorate Pizzas</h1>
      <div className='sorting'>
        <h3>Sort By Price</h3>
        <select name='sort' id='sort' onChange={(e) => doSort(e)}>
          <option value='asc'>Low to High</option>
          <option value='dsc'>High to Low</option>
        </select>
      </div>
      <div className='cards'>
        {pizzas.length &&
          pizzas.map((pizza) => {
            return <ProductCard pizza={pizza} key={pizza.id}></ProductCard>;
          })}
      </div>
    </section>
  );
}

export default Home;
