import React from 'react';

const WishlistItem = ({ name, price, oldPrice, discount, newProduct }) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        {discount && <div className="discount-tag">{discount}</div>}
        {newProduct && <div className="new-tag">NEW</div>}
        <img src="../bag.png" alt={name} />
        <button className="add-to-cart">Add To Cart</button>
      </div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <div className="price">
          <span className="current-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        <div className="rating">
        <div className="rating">★★★★☆ 
          <pre>(50 Reviews)</pre></div>
        
          
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
