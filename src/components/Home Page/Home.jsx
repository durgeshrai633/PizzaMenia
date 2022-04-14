import React from "react";
import { useSelector } from "react-redux";
import "./home.css";
import ProductCard from "./ProductCard";
function Home() {
  const { pizza } = useSelector((state) => state.pizza);

  return (
    <section id='home'>
      <h1 className='heading'>Your Faviorate Pizzas</h1>
      <div className='cards'>
        {pizza.length &&
          pizza.map((pizza) => {
            console.log("hi");
            return <ProductCard pizza={pizza} key={pizza.id}></ProductCard>;
          })}
      </div>
    </section>
  );
}

export default Home;
