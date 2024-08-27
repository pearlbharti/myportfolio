import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ isVisible }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigateRef = useRef(null);
    const navbarContainerRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.overflow = !isOpen ? 'visible' : 'hidden';
        }
    };

    const handleLinkClick = () => {
        if (isOpen) {
            toggleMenu(); // Close the menu if it's open
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-item active' : 'nav-item';
    };

    return (
        <>
            <div className={`navbar ${isVisible ? 'fade-in' : ''}`}>
                <div className="navbar-container" ref={navbarContainerRef}>
                    <Link to="/" onClick={handleLinkClick}>
                        <div className="logo-img">
                            <img
                                loading="lazy"
                                srcSet="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/home_page/sneh-logo.png"
                                className="the-img"
                                alt="Navbar"
                            />
                        </div>
                    </Link>
                    {!isMobile && (
                        <div className="navigate">
                            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                                <div className={getNavLinkClass('/about')}>ABOUT</div>
                            </Link>
                            <Link to="/work" className="nav-link" onClick={handleLinkClick}>
                                <div className={getNavLinkClass('/work')}>WORK</div>
                            </Link>
                            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                                <div className={getNavLinkClass('/contact')}>CONTACT</div>
                            </Link>
                            <Link to="/devlogs" className="nav-link" onClick={handleLinkClick}>
                                <div className={getNavLinkClass('/devlogs')}>DEVLOGS</div>
                            </Link>
                        </div>
                    )}
                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
                {isMobile && (
                    <div
                        className={`navigate ${isOpen ? 'open' : ''}`}
                        ref={navigateRef}
                    >
                        <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                            <div className={getNavLinkClass('/about')}>ABOUT</div>
                        </Link>
                        <Link to="/work" className="nav-link" onClick={handleLinkClick}>
                            <div className={getNavLinkClass('/work')}>WORK</div>
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                            <div className={getNavLinkClass('/contact')}>CONTACT</div>
                        </Link>
                        <Link to="/devlogs" className="nav-link" onClick={handleLinkClick}>
                            <div className={getNavLinkClass('/devlogs')}>DEVLOGS</div>
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
                /* Ensure the body background is set */
                body {
                    background-color: #010004;
                }

                .navbar {
                    align-items: center;
                    padding: 0 1em;
                    height: 5em;
                    box-sizing: border-box;
                    background-color: #010004; /* Set background color explicitly */
                    border-bottom: none;
                    position: sticky;
                    top: 0;
                    z-index: 10000;
                    overflow: hidden;
                    transition: opacity 2s ease;
                    opacity: 0;
                }

                .navbar.fade-in {
                    opacity: 1;
                }

                .navbar-container {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                    height: 100%;
                }

                .logo-img {
                    height: 100%;
                    width: auto;
                    display: flex;
                    align-items: center;
                }

                .the-img {
                    height: 100%;
                    width: 10rem;
                    object-fit: cover;
                    object-position: center;
                }

                .navigate {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 2rem;
                    flex-grow: 1;
                    overflow: hidden;
                    transition: opacity 0.3s ease;
                }

                .nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #E7EEFF;
                    padding: 1em;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-link {
                    text-decoration: none;
                    color: inherit;
                    position: relative;
                }

                .nav-item.active {
                    background: radial-gradient(circle at center, rgba(131, 113, 243, 0.5), rgba(69, 156, 236, 0) 41%);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    border-radius: 1px;
                }

                .nav-item.active::after {
                    content: '';
                    position: absolute;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 4px;
                    background: radial-gradient(70.31% 100% at 50% 0%, rgba(131, 113, 243, 0.5) 0%, rgba(69, 156, 236, 0) 100%), radial-gradient(130.16% 129.69% at 63.64% -12.5%, #8528FB 0%, rgba(86, 84, 74, 0.12) 100%), radial-gradient(80.68% 51.24% at 19.32% 40.62%, #1864B7 0%, rgba(23, 61, 102, 0.88) 100%), radial-gradient(28.98% 110.94% at 43.75% -31.25%, rgba(24, 17, 24, 0.53) 21.25%, #000000 100%), #030303;
                    border-radius: 4px;
                    transform: translateY(50%);
                }

                .hamburger {
                    display: none;
                    font-size: 1.5em;
                    cursor: pointer;
                    color: #E7EEFF;
                }

                @media (max-width: 768px) {
                    .navbar-container {
                        align-items: center;
                    }

                    .navigate {
                        display: flex;
                        max-height: 0;
                        opacity: 0;
                        padding: 0;
                        overflow: hidden;
                        gap: 0rem;
                        transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
                    }

                    .hamburger {
                        display: block;
                    }

                    .navigate.open {
                        max-height: 1000px;
                        opacity: 1;
                        padding: 1rem;
                        background: black;
                        flex-direction: column;
                        align-items: center;
                        top: 0;
                        right: 0;
                        position: relative;
                        box-shadow: 0px 9px 14px -4px rgba(255, 255, 255, 0.5);
                        border-radius: 10px;
                    }

                    .navigate.open::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 1.5rem;
                        border-bottom: 1px solid #e9ecef;
                    }
                }
            `}</style>
        </>
    );
}

export default Navbar;
