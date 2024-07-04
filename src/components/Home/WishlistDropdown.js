import React, { useRef } from 'react';
import '../../css/Wishlist.css'; // Make sure this file includes any necessary custom styles

const WishlistDropdown = ({ closeWishlist }) => {
  return (
    <div className="wishlist-dropdown">
      <ul>
        <li><a href="#">Manage my Account</a></li>
        <li><a href="#">My Order</a></li>
        <li><a href="#">My Cancellations</a></li>
        <li><a href="#">My Reviews</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
      <button onClick={closeWishlist}>Close</button>
    </div>
  );
}

export default WishlistDropdown;
