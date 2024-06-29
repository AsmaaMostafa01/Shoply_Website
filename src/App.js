import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Product from './pages/Product';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

const Home = () => <div>Home Page</div>; // Placeholder for Home component

export default App;

