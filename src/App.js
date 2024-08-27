import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component
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

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulate loading time)
      setTimeout(() => {
        setNavbarVisible(true); // Set navbar visibility after an additional short delay
      }, 50); // Delay before showing the navbar
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);
  return (
    <Router basename="/myportfolio" >
      {loading ? (
        <LoadingScreen /> // Show loading screen while loading is true
      ) : (
        <>
          <ScrollToTop />
          <Navbar isVisible={navbarVisible} />
          <Routes>
            <Route path="/myportfolio" element={<HomePage />} />
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
