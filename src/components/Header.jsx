import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);
  useEffect(() => {}, []);
  return (
    <header>
      <nav>
        <div className='nav'>
          <h1 className='logo'>
            <Link to={"/"}>Pizza Minia</Link>
          </h1>
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
            {isAuth && (
              <li className='nav-item'>
                <Link to={"/account"}>Your Account</Link>{" "}
              </li>
            )}
          </ul>
          <div className='right'>
            <Link to={"/cart"}>
              <i className='fa fa-shopping-cart'></i>
            </Link>
            {isAuth ? (
              <Link to={"/account"}>
                <i className='fa fa-user-check'></i>
              </Link>
            ) : (
              <Link to={"/login"}>
                <i className='fa fa-user'></i>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
