import React from 'react';
import '../../css/About.css';

const AboutContent = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Our Story</h2>
        <p>
        Our platform is an innovative e-commerce website that offers new and pre-owned 
          product. We focus on simplifying transactions with a user-friendly interface that provides a safe 
          and reliable environment, emphasizing product quality and financial integrity to build user 
          trust. Additionally, we promote sustainability by encouraging the reuse and recycling of goods, 
          helping to reduce waste and positively impact the environment. We aim to become the leading 
          e-commerce destination in the Middle East, with a focus on continuous innovation and 
          enhancing the user experience. 

        </p>
      </div>
      <div className="about-image">
        <img src="../shopping.jpeg" alt="Shopping" />
      </div>
    </section>
  );
};

export default AboutContent;