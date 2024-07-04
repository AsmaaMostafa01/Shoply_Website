import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount';
import Product from './pages/Product';
import SignUp from './pages/SignUp';
import Wishlist from './pages/Wishlist';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

const Home = () => <div>Home Page</div>; // Placeholder for Home component

export default App;

