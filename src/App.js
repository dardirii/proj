import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';
import Account from './components/Account';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ProductList addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;