// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/header/Header';
import About from './pages/About';
import Prea_Loader from './components/prealoader/Prea_Loader';
import Search_Area from './components/searcharea/Search_Area';
import Footer from './components/footer/Footer';
import News from './pages/News';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';


const App = () => {
  return (
    <Router>
      <Header />
      <Search_Area />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
     
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
