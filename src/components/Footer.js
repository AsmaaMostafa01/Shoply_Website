import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="section">
          <h3>Exclusive</h3>
          <p>Subscribe to get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="section">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="section">
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className="section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="section">
          <h3>Download App</h3>
          <a href="#"><img src="/images/google-play.png" alt="Google Play" /></a>
          <a href="#"><img src="/images/app-store.png" alt="App Store" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
