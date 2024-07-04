import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import Wishlist from './pages/Wishlist';
import './css/Header.css';
import './css/Footer.css';
import './css/HomePage.css';
//import './css/LeftMenu.css';

import Contact from './pages/Contact';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Product from './pages/Product';
import SignUp from './pages/SignUp';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/myaccount" element={<MyAccount/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};




export default App;

