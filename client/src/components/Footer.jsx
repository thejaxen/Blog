import React from 'react'
import Logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <span> <b>Made for GLB</b> </span>
    </footer>
  )
}

export default Footer