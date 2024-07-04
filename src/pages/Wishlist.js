import React from 'react';
import WishlistItem from '../components/Wishlist/WishlistItem';
import '../css/Wishlist.css';

const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h2>Wishlist (4)</h2>
        <button className="move-all-to-bag">Move All To Bag</button>
      </div>
      <div className="wishlist-items">
        <WishlistItem name="Gucci duffle bag" price="960" oldPrice="1160" 
        discount="35%" />
        <WishlistItem name="RGB liquid CPU Cooler" price="1960" />
        <WishlistItem name="GP11 Shooter USB Gamepad" price="550" />
        <WishlistItem name="Quilted Satin Jacket" price="750" />
      </div>
      <div className="just-for-you-header">
        <h3>Just For You</h3>
        <button className="see-all">See All</button>
      </div>
      <div className="just-for-you">
        <WishlistItem name="ASUS FHD Gaming Laptop" price="960" oldPrice="1160" discount="35%" />
        <WishlistItem name="IPS LCD Gaming Monitor" price="1160" />
        <WishlistItem name="HAVIT HV-G92 Gamepad" price="560" newProduct={true} />
        <WishlistItem name="AK-900 Wired Keyboard" price="200" />
      </div>
    </div>
  );
}

export default Wishlist;
