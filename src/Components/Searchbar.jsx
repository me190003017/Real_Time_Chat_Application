     import React from 'react'
     
     export const Searchbar = () => {
       return (
         <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find an user" />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="userChatInfo">
                    <span>John</span>
                    
                </div>
            </div>
         </div>
       )
     }
     