import React from 'react';
import '../../css/HomePage.css';

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2>New Arrival</h2>
      <div className="product-list">
        {/* Example product card */}
        <div className="product-card">
          <img src="/images/product4.jpg" alt="Product 4" />
          <h3>Product Name</h3>
          <p>$99.99</p>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
