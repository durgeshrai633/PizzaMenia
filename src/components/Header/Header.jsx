import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Store/authSlice";
import "./header.css";
function Header() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
            {/* <li className='nav-item'>
              <Link to={"/blog"}>Blog</Link>{" "}
            </li> */}
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
                <i className='fa fa-user-check'>
                  {" "}
                  <div className='hidden'>
                    <button className='btn' onClick={() => doLogout()}>
                      Logout
                    </button>
                  </div>
                </i>
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
