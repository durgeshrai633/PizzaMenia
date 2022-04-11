import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/authSlice";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userDetails));
  };
  console.log(error);
  return (
    <div>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
