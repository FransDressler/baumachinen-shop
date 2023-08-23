import './styles/styles.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
        <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/produkte" element={<Products/>} />
          <Route path="/produkt" element={<Product/>} />
          <Route path="/standort" element={<Location/>} />
          <Route path="/kontakt" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;