import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
}
export default App;
