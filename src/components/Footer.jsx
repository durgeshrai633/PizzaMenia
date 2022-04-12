import React from "react";
import "./footer.css";
function Footer() {
  return (
      <div className='footer'>
        <div className='footer-left'>
          <h2>Pizza Minia</h2>
        </div>
        <div className='footer-middle'>
          <div className='social-media-links'>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-youtube'></i>
          </div>
        </div>
        <div className='footer-right'></div>
      </div>
  );
}

export default Footer;
