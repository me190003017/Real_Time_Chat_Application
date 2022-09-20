import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../firebase";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';

export const Navbar = () => {
  const {currentUser}=useContext(AuthContext);
  const [username,setUsername]=useState("");
  const [user,setUser]=useState(null);
  const [err,setErr]=useState(false);

  return (
    <div className="navbar">
        <span className="logo">VKB Chat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}
