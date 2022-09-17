import React from 'react'
import Add  from "../img/addAvatar.png";
export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">BCHAT</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                  <img src={Add}  />
                  <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have account ? Login</p>
        </div>
    </div>
  )
}

