import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigateRef = useRef(null);
    const navbarContainerRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const navigate = navigateRef.current;
        const navbarContainer = navbarContainerRef.current;

        if (isOpen && isMobile && navigate && navbarContainer) {
            // Calculate height including navbarContainer
            const navbarContainerHeight = navbarContainer.offsetHeight;
            navbar.style.height = `${navbarContainerHeight + navigate.scrollHeight + 5}px`; // Adding some extra padding
        } else {
            navbar.style.height = '5em'; // Or any default height you need
        }
    }, [isOpen, isMobile]);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container" ref={navbarContainerRef}>
                    <img
                        loading="lazy"
                        srcSet="https://dvw0mu5xdr2i4.cloudfront.net/sneh_logo.png"
                        className="logo-img"
                        alt="Navbar"
                    />
                    {!isMobile && (
                        <div className="navigate">
                            <Link to="/about" className="nav-link">
                                <div className="nav-item about">ABOUT</div>
                            </Link>
                            <Link to="/work" className="nav-link">
                                <div className="nav-item projects">WORK</div>
                            </Link>
                            <Link to="/contact" className="nav-link">
                                <div className="nav-item contact">CONTACT</div>
                            </Link>
                            <Link to="/devlogs" className="nav-link">
                                <div className="nav-item devlogs">DEVLOGS</div>
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
                        <Link to="/about" className="nav-link">
                            <div className="nav-item about">ABOUT</div>
                        </Link>
                        <Link to="/work" className="nav-link">
                            <div className="nav-item projects">WORK</div>
                        </Link>
                        <Link to="/contact" className="nav-link">
                            <div className="nav-item contact">CONTACT</div>
                        </Link>
                        <Link to="/devlogs" className="nav-link">
                            <div className="nav-item devlogs">DEVLOGS</div>
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
                .navbar {
                    align-items: center;
                    padding: 0 1em;
                    box-sizing: border-box;
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #e9ecef;
                    position: relative;
                    z-index: 1000;
                    overflow: hidden;
                    transition: height 0.3s ease;
                }

                .navbar-container {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }

                .logo-img {
                    max-width: 10em;
                    max-height: 100%;
                    object-fit: contain;
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

                .navigate.open {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    top: 100%;
                    right: 0;
                    width: 100%;
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #e9ecef;
                    opacity: 1;
                    overflow: visible; /* Ensure content is visible */
                }

                .nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #343a40;
                    padding: 1em;
                    transition: color 0.3s ease;
                }

                .nav-link {
                    text-decoration: none;
                    color: inherit;
                }

                .nav-link:hover .nav-item {
                    color: #007bff;
                }

                .hamburger {
                    display: none;
                    font-size: 1.5em;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .navbar-container {
                        align-items: center;
                    }

                    .navigate {
                        display: none;
                        max-height: 0;
                        opacity: 0;
                        padding: 0;
                        overflow: hidden;
                    }

                    .hamburger {
                        display: block;
                    }

                    .navigate.open {
                        display: flex;
                        opacity: 1;
                        max-height: none; /* Allow height to be determined by content */
                        overflow: visible; /* Ensure content is visible */
                    }
                }
            `}</style>
        </>
    );
}

export default Navbar;
