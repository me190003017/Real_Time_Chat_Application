import React from 'react'
import Add from "../img/add.png";
import More from "../img/more.png";
import Cam from "../img/cam.png";
import { Messages } from './Messages';
import { Input } from "./Input";

export const Chat = () => {
  return (
    <div className="chat">
         <div className="chatInfo">
          <span>John</span>
          <div className="chatIcons">
            <img src={Cam} alt="" />
            <img src={Add} alt="" />
            <img src={More} alt="" />
          </div>
         </div>
         <Messages />   
          <Input/>
    </div>
   
  )
}
