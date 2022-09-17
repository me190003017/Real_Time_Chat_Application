import React from 'react'
import { Chats } from './Chats'
import { Navbar } from './Navbar'
import { Searchbar } from './Searchbar'

export const Sidebar = () => {
  return (
    <div className="sidebar">
       <Navbar/>
       <Searchbar/>
       <Chats/>
    </div>
  )
}
