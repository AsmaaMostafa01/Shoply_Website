
import React, { useRef } from 'react';
import '../../css/HomePage.css'; // Make sure this file includes any necessary custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faCamera, faHeadphones, faGamepad, faClock } from '@fortawesome/free-solid-svg-icons';

const Categories = ({ categories }) => {
  // Ref for scrolling categories horizontally
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="flash-sales-section">
      <div className="flash-sales-header ">
        <div className="today-container">
          <div className="today-square"></div>
          <div className="today-text">Categories</div>
        </div>
        <h2 className="flash-sales-title">Browse By Category</h2>
        <div className="ms-auto d-flex align-items-center">
          <button className="btn btn-outline-secondary me-2" onClick={scrollLeft}>
            &lt; {/* Left arrow */}
          </button>
          <button className="btn btn-outline-secondary" onClick={scrollRight}>
            &gt; {/* Right arrow */}
          </button>
        </div>
      </div>
      <div className="categories d-flex overflow-auto" ref={scrollRef}>
        {categories.map((category) => (
          <div className="category-card text-center" key={category.name}>
            <FontAwesomeIcon icon={category.icon} size="2x" className="mb-2" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Categories;
