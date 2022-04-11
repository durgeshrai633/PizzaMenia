import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function AuthForm() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowSignUp(true);
          setShowLogin(false);
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          setShowLogin(true);
          setShowSignUp(false);
        }}
      >
        Login
      </button>
      {showLogin && <Login></Login>}
      {showSignUp && <SignUp></SignUp>}
    </div>
  );
}

export default AuthForm;
