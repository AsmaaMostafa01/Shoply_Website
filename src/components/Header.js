import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <div className="container1">
        Summer Sale For All Products And Free Express Delivery. Up To 50% Sale!
      </div>
      <nav className="navbar">
        <a href="#" className="logo"><img src="/Logo.png" alt="Logo" /></a>
        <ul className="navmenu">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/myaccount">My Account</a></li>
        </ul>
        <div className="nav-icon">
          <a href="#"><i className='bx bx-search'></i></a>
          <a href="#"><i className='bx bx-cart'></i></a>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
