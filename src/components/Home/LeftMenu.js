import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/LeftMenu.css';

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <ul>
        <li><Link to="/">Woman’s Fashion</Link></li>
        <li><Link to="/">Men’s Fashion</Link></li>
        <li><Link to="/">Electronics</Link></li>
        <li><Link to="/">Home & Lifestyle</Link></li>
        <li><Link to="/">Medicine</Link></li>
        <li><Link to="/">Sports & Outdoor</Link></li>
        <li><Link to="/">Baby’s & Toys</Link></li>
        <li><Link to="/">Groceries & Pets</Link></li>
        <li><Link to="/">Health & Beauty</Link></li>
      </ul>
    </div>
  );
};

export default LeftMenu;
