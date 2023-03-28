import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'> <h6> art </h6> </Link>
          <Link className='link' to='/?cat=science'> <h6> science </h6> </Link>
          <Link className='link' to='/?cat=technology'> <h6> technology </h6> </Link>
          <Link className='link' to='/?cat=cinema'> <h6> cinema </h6> </Link>
          <Link className='link' to='/?cat=design'> <h6> design </h6> </Link>
          <Link className='link' to='/?cat=food'> <h6> food </h6> </Link>
          <span>Username</span>
          <span>Logout</span>
          <span className='write'> <Link className='link' to='/write'>Write</Link> </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar