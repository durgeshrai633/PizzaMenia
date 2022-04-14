import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Store/authSlice";
import "./form.css";
function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const { error } = useSelector((state) => state.auth);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userDetails));
  };

  useEffect(() => {
    if (isAuth) navigate("/account");
  }, [isAuth]);
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Login </h1>
      <div className='form'>
        <form onSubmit={handleLogin} autoComplete='on'>
          <input
            type='email'
            defaultValue={userDetails.email}
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleDetails}
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            defaultValue={userDetails.password}
            onChange={handleDetails}
          />
          <button className='btn login-btn' type='submit'>
            Login
          </button>
          <div className='to-signup'>
            <span className='signup-span'>
              new user? <Link to={"/signup"}>Sign up here</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
