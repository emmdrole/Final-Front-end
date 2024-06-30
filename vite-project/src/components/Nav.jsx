import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({setCity}) => {
  const [input,setInput] = useState('');


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (input.trim()) {
        setCity(input);
      }
    }
  };

  return (
    <>
   <nav className='flex flex-row justify-between'>
    <ul className='flex flex-row gap-5 items-center font-bold'>
      <li><Link to="ContactUs">Contact Us</Link></li>
      <li><Link to="AboutUs">About Us</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
    
     <input className='w-2/3 h-custom rounded-custom border border-black bg-widget-grey placeholder-black pl-10' placeholder='Search for your preffered city...' type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}></input>
   </nav>
    </>
  )
}

export default Nav