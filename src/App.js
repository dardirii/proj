import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ProductPage from './components/ProductPage'; // Ganti dengan ProductPage jika menggunakan nama ini
import Cart from './components/Cart';
import HomePage from './components/HomePage'; // Ganti dengan HomePage jika menggunakan nama ini
import AccountPage from './components/AccountPage'; // Tambahkan jika ada
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar di sini akan selalu ditampilkan */}
        <NavigationBar cartItems={cartItems} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Halaman Home */}
          <Route path="/home" element={<Navigate to="/" />} /> {/* Redirect dari /home ke / */}
          <Route path="/shop" element={<ProductPage addToCart={addToCart} />} /> {/* Halaman Product Shop */}
          <Route path="/account" element={<AccountPage />} /> {/* Halaman Akun */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Halaman Keranjang */}
          
          {/* Rute fallback jika halaman tidak ditemukan */}
          <Route path="*" element={<HomePage />} /> {/* Jika rute tidak dikenali, arahkan ke Home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;