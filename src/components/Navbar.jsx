import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar bg-dark container'>
      <h1><Link className='link' to='/'>Home</Link></h1>
      <h1><Link className='link' to='/notes'>Notes</Link></h1>
      <h1><Link className='link' to='/createnotes'>Create Notes</Link></h1>
    </nav>
    
  )
}

export default Navbar