import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <div className="footer-section">
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="wrapper">
              <input type="email" placeholder="Enter your email"/>
              <button><i className='bx bxs-right-arrow-alt bx-flip-vertical' style={{color:'#ffffff'} } ></i></button>
            </div>
      </div>
        <div className="footer-section">
          <h3>Support</h3>
          <address>
            111 Bijoy sarani, Dhaka,<br />
            DH 1515, Bangladesh.<br />
            Email: <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a><br />
            Phone: <a href="tel:+88015888889999">+88015-88888-9999</a>
          </address>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <p><a href="#">My Account</a></p>
          <p><a href="#">Login / Register</a></p>
          <p><a href="#">Cart</a></p>
          <p><a href="#">Wishlist</a></p>
          <p><a href="#">Shop</a></p>
        </div>
        <div className="footer-section">
          <h3>Quick Link</h3>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms Of Use</a></p>
          <p><a href="#">FAQ</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div className="footer-section">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="app-links">
            <img src="/QR.png" alt="QR Code" className="qr" />
            <div>
              <img src="/google-play-badge.png" alt="Google Play" />
              <img src="/black.png" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
