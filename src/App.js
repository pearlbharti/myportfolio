import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import Devlog from './pages/Devlogs';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devlogs" element={<Devlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;