import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import WishlistDropdown from '../components/Home/WishlistDropdown';

const Header = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Function to toggle wishlist dropdown
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  // Close wishlist dropdown when clicking outside
  const closeWishlist = () => {
    setIsWishlistOpen(false);
  };

  return (
    <header>
      <div className="top-bar">
        <h3 className="sale-message">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
        <a href="#" className="shop-now-link">Shop Now</a>
      </div>
      <nav className="main-nav">
        <div className="logo">Exclusive</div>
    
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>

        <div className="search-icons">
          <input type="text" placeholder="What are you looking for?" />
          <div className="icons">
            <a href="#"><img src="/images/search.png" alt="Search" /></a>
            {/* Wishlist icon with dropdown */}
            <a href="#" onClick={toggleWishlist}>
              <img src="/images/heart.png" alt="Wishlist" />
            </a>
            <a href="#"><img src="/images/shopping-cart.png" alt="Cart" /></a>
          </div>
        </div>
      </nav>

      {/* Wishlist dropdown component */}
      {isWishlistOpen && <WishlistDropdown closeWishlist={closeWishlist} />}
    </header>
  );
}

export default Header;
