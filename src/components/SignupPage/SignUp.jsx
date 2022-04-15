import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Store/authSlice";

function SignUp() {
  const [user, setUser] = useState({ email: "", name: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = () => {
    dispatch(createUser(user));
    navigate("/account");
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <h1 className='accent' style={{ textAlign: "center" }}>
        Sign Up{" "}
      </h1>
      <div className='form'>
        <form onSubmit={(e) => e.preventDefault()} autoComplete='on'>
          <input
            type='email'
            defaultValue={user.email}
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleUser}
          />
          <input
            type='text'
            defaultValue={user.name}
            name='name'
            id='name'
            placeholder='Enter Name'
            onChange={handleUser}
          />
          <input
            type='password'
            name='password'
            defaultValue={user.password}
            id='password'
            placeholder='Password'
            onChange={handleUser}
          />
          <button type='submit' className='btn' onClick={() => signUp()}>
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
