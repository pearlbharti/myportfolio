import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import Devlog from './pages/Devlogs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setNavbarVisible(true);
      }, 50);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/myportfolio">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <ScrollToTop />
          <Navbar isVisible={navbarVisible} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/devlogs" element={<Devlog />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
