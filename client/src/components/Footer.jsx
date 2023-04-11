import React from 'react';
import Logo from '../img/logo.png';
import SDG from  '../img/sdg17.png';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sdg17">
        <img src={SDG} alt="" />
      </div>

      <span>
        <b>Made by </b>
        <a href="https://github.com/GLB-Blog" className="footer-link">GLB-Blog</a>
      </span>
    </footer>
  );
};

export default Footer;
