import React from "react";
import "./menu.css";

function Menu() {
  return (
    <section>
      <h1 className='heading'>Menu</h1>
      <div className='cards'>
        <div className='card card-circle'>
          <img src='/images/first.jpg' alt='' />
          <h3 className='primary'>Indian</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/first.jpg' alt='' />
          <h3 className='primary'>Chinese</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/first.jpg' alt='' />
          <h3 className='primary'>South Indian</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/first.jpg' alt='' />
          <h3 className='primary'>American</h3>
        </div>
      </div>
    </section>
  );
}

export default Menu;
