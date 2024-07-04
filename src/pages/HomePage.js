import React from 'react';
import FlashSales from '../components/Home/FlashSales';
import Categories from '../components/Home/Categories';
import BestSelling from '../components/Home/BestSelling';
import ExploreProducts from '../components/Home/ExploreProducts';
import NewArrivals from '../components/Home/NewArrivals';
import LeftMenu from '../components/Home/LeftMenu';
import Services from '../components/About/Services';
import '../css/About.css';
import { faMobileAlt, faLaptop, faCamera, faHeadphones, faGamepad, faClock } from '@fortawesome/free-solid-svg-icons';

import '../css/HomePage.css';

const products = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    image: '/images/gamepad.jpg',
    salePercentage: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    image: '/images/keyboard.jpg',
    salePercentage: 35,
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: 'Logitech G502 Hero Mouse',
    image: '/images/mouse.jpg',
    salePercentage: 25,
    currentPrice: 480,
    originalPrice: 640,
    rating: 4,
    reviews: 62,
  },
  {
    id: 4,
    name: 'Samsung 27-inch Curved Monitor',
    image: '/images/monitor.jpg',
    salePercentage: 15,
    currentPrice: 1200,
    originalPrice: 1400,
    rating: 5,
    reviews: 110,
  },
  {
    id: 5,
    name: 'Sony WH-1000XM4 Wireless Headphones',
    image: '/images/headphones.jpeg',
    salePercentage: 20,
    currentPrice: 320,
    originalPrice: 400,
    rating: 5,
    reviews: 98,
  },
];
const categories = [
  { name: 'Phones', icon: faMobileAlt },
  { name: 'Computers', icon: faLaptop },
  { name: 'SmartWatch', icon: faClock },
  { name: 'Camera', icon: faCamera },
  { name: 'HeadPhones', icon: faHeadphones },
  { name: 'Gaming', icon: faGamepad },
  // Add more categories as needed
];

const bestSellingProducts = [
  {
    id: 1,
    image: '/images/headphones.jpeg',
    name: 'Product 1',
    currentPrice: 29.99,
    originalPrice: 39.99,
    rating: 4,
  },
  {
    id: 2,
    image: '/images/headphones.jpeg',
    name: 'Product 2',
    currentPrice: 49.99,
    originalPrice: 59.99,
    rating: 5,
  },
  {
    id: 3,
    image: '/images/headphones.jpeg',
    name: 'Product 3',
    currentPrice: 19.99,
    originalPrice: 29.99,
    rating: 3,
  },
  {
    id: 4,
    image: '/images/headphones.jpeg',
    name: 'Product 4',
    currentPrice: 99.99,
    originalPrice: 129.99,
    rating: 5,
  },
  {
    id: 5,
    image: '/images/headphones.jpeg',
    name: 'Product 5',
    currentPrice: 14.99,
    originalPrice: 24.99,
    rating: 2,
  },
];
const exploreProducts = [
  // Example products data
  { id: 1, name: 'Breed Dry Dog Food', image: '/images/product1.jpg', currentPrice: 50, originalPrice: 70, rating: 4 },
  { id: 2, name: 'CANON EOS DSLR Camera', image: '/images/product2.jpg', currentPrice: 30, originalPrice: 50, rating: 5 },
  { id: 3, name: 'ASUS FHD Gaming Laptop', image: '/images/product3.jpg', currentPrice: 20, originalPrice: 40, rating: 3 },
  { id: 4, name: 'Curology Product Set ', image: '/images/product4.jpeg', currentPrice: 60, originalPrice: 80, rating: 4 },
  { id: 5, name: 'Product 5', image: '/images/product5.jpg', currentPrice: 40, originalPrice: 60, rating: 4 },
  { id: 6, name: 'Product 6', image: '/images/product6.jpg', currentPrice: 25, originalPrice: 45, rating: 5 },
  { id: 7, name: 'Product 7', image: '/images/product7.jpg', currentPrice: 35, originalPrice: 55, rating: 3 },
  { id: 8, name: 'Product 8', image: '/images/product8.jpg', currentPrice: 45, originalPrice: 65, rating: 4 },
];


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="exclusive-section">
        <LeftMenu />
        <div className="exclusive-image">
          <img src="/images/exclusive-image.jpg" alt="Exclusive" />
        </div>
      </div>
      <FlashSales products={products} />
      <Categories categories={categories} />
      <BestSelling bestSellingProducts={bestSellingProducts}/>
      <ExploreProducts exploreProducts={exploreProducts} />
      
      <Services />
    </div>
  );
};

export default HomePage;
