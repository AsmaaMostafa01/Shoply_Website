import React from 'react';
import '../../css/HomePage.css'; // Ensure this file includes any necessary custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ExploreProducts = ({ exploreProducts }) => {
  return (
    <div className="flash-sales-section">
      <div className="flash-sales-header">
        <div className="today-container">
          <div className="today-square"></div>
          <div className="today-text">Our Products</div>
        </div>
        <h2 className="flash-sales-title">Explore Our Products</h2>
      </div>
      <div className="explore-products-grid">
        {exploreProducts.map((product, index) => (
          <div className="product-card text-center" key={product.id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image mb-2" />
              <div className="add-to-cart-overlay">
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
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
      <div className="view-all-products-container">
        <button className="view-all-products-button">View All Products</button>
      </div>
    </div>
  );
};

export default ExploreProducts;
