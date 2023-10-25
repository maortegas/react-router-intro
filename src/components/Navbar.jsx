import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/img/cake.png'
import home from '../assets/img/home.png'
import contacto from '../assets/img/contacts.png'

const Navbar = () => {
  return (
  <nav className='navbar'>
        <div className='navbar-menu' >
            <Link to='/'> <img className='imgNav' src={home} alt="" /> <span>Home</span></Link>
            <Link to='/contacto'> <img className='imgNav'  src={contacto} alt="" /> <span> Contacto</span></Link>
        </div>
        <div> <span>Happy Cake</span> <img className='imgNav'  src={logo} alt="logo" /></div>
  </nav>
  )
}

export default Navbar