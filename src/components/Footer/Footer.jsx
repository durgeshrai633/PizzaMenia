import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <h2 className='logo-footer'>Pizza Minia</h2>
      </div>
      <div className='footer-middle'>
        <div className='social-media-links'>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-linkedin'></i>
          <i className='fa-brands fa-youtube'></i>
        </div>
        <div className='copyright'>
          &copy; Copyright 2022, All rights Reserved
        </div>
      </div>
      <div className='footer-right'>
        <h3> Address -</h3>
        <address>
          New Ashok Nagar <br />
          New Delhi, PinCode-11096 <br />
          Phone - 1100011
        </address>
      </div>
    </div>
  );
}

export default Footer;
