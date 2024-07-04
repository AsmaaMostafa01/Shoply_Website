import React from 'react';
import '../../css/HomePage.css'; // Make sure this file includes any necessary custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CountdownTimer from './CountdownTimer'; // Adjust the path as per your directory structure

const BestSelling = ({ bestSellingProducts }) => {
  return (
    <div className="flash-sales-section">
      <div className="flash-sales-header">
        <div className="today-container">
          <div className="today-square"></div>
          <div className="today-text">This Month</div>
        </div>
        <h2 className="flash-sales-title">Best Selling Products</h2>
        <div className="ms-auto">
          <button className="view-all-button ms-auto">View All</button>
        </div>
      </div>
      <div className="best-selling-products d-flex overflow-auto">
        {bestSellingProducts.map((product) => (
          <div className="product-card text-center" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image mb-2" />
            <h3>{product.name}</h3>
            <div className="price">
              <span className="current-price">${product.currentPrice}</span>
              <span className="original-price">${product.originalPrice}</span>
            </div>
            <div className="rating">
              {Array(product.rating).fill().map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        ))}
      </div>
     {/* Image and text section */}
     <div className="enhance-music-experience text-center mt-4">
        <div className="enhance-image-container position-relative">
          <img src="/images/music.jpg" alt="" className="enhance-image" />
          <div className="image-overlay-text">
            <div className="overlay-categories">Categories</div>
            <div className="overlay-text">Enhance Your Music Experience</div>
            <CountdownTimer />
            <button className="buy-now-button">Buy Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
