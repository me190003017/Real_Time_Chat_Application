import React from 'react';
import { useNavigate,Link } from "react-router-dom";
import { auth} from "../firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
        // ...
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setErr(true)
      });
    
      
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">BCHAT</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong </span>}
        </form>
        <p>You don't have an account? <Link style={{"text-decoration":"none"}} to="/register">Register</Link></p>
      </div>
    </div>
  );
}

