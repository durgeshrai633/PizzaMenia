import React from "react";
import "./menu.css";

function Menu() {
  return (
    <section>
      <h1 className='heading'>Menu</h1>
      <div className='cards'>
        <div className='card card-circle'>
          <img src='/images/indian.jpg' alt='' />
          <h3 className='primary'>Indian</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/chinese.jpg' alt='' />
          <h3 className='primary'>Chinese</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/italian.jpg' alt='' />
          <h3 className='primary'>Italian</h3>
        </div>
        <div className='card card-circle'>
          <img src='/images/american.jpg' alt='' />
          <h3 className='primary'>American</h3>
        </div>
      </div>
    </section>
  );
}

export default Menu;
