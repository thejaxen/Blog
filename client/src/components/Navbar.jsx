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
        <span className='usernametext'>Username</span>
        <span className='logouttext'>Logout</span>
        <span className='write'> <Link className='link' to='/write'>Write</Link> </span>
        <div className="links">
          <Link className='link' to='/?sdg=Goal-1'> <h6> Goal-1 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-2'> <h6> Goal-2 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-3'> <h6> Goal-3 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-4'> <h6> Goal-4 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-5'> <h6> Goal-5 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-6'> <h6> Goal-6 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-7'> <h6> Goal-7 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-8'> <h6> Goal-8 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-9'> <h6> Goal-9 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-10'> <h6> Goal-10 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-11'> <h6> Goal-11 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-12'> <h6> Goal-12 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-13'> <h6> Goal-13 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-14'> <h6> Goal-14 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-15'> <h6> Goal-15 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-16'> <h6> Goal-16 </h6> </Link>
          <Link className='link' to='/?sdg=Goal-17'> <h6> Goal-17 </h6> </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar