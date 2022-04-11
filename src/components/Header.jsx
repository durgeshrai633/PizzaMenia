import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  useEffect(() => {}, []);
  return (
    <header>
      <nav>
        <div className='nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to={"/products"}>Products</Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to={"/menu"}>Menu</Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to={"/events"}>Events</Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to={"/blog"}>Blog</Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to={"/contact"}>Menu</Link>{" "}
            </li>
          </ul>
          <div className='right'>
            <Link to={"/cart"}>
                Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
