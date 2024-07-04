import React from 'react';
import '../../css/About.css';

const AboutContent = () => {
  return (
    <section className="about">
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>About</span>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10.5 million active
            sellers and 45.5 million active customers. Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/shopping.jpg" alt="Shopping" />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
