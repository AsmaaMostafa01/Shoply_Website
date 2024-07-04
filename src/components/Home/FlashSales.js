import React, { useState, useEffect, useRef } from 'react';
import '../../css/HomePage.css';

const FlashSales = ({ products }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="timer-segment">
        <div className="label">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
        <div className="time">{timeLeft[interval]}</div>
      </div>
    );
  });

  // Ref for scrolling products horizontally
  const scrollRef = useRef(null);



  return (
    <div className="flash-sales-section">
      <div className="flash-sales-header">
        <div className="today-container">
          <div className="today-square"></div>
          <div className="today-text">Today's</div>
        </div>
        <h2 className="flash-sales-title">Flash Sales</h2>
        <div className="countdown">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
      <div className="products" ref={scrollRef}>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="sale-percentage">{product.salePercentage}%</div>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '200px', height: '200px' }} // Adjust width and height as needed
            />
            <h3>{product.name}</h3>
            <div className="price">
              <span className="current-price">${product.currentPrice}</span>
              <span className="original-price">${product.originalPrice}</span>
            </div>
            <div className="rating">
              {'⭐'.repeat(product.rating)} ({product.reviews})
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default FlashSales;
