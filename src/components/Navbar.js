import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navigateRef = useRef(null);
    const navbarContainerRef = useRef(null);
    const location = useLocation();

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
            const navbarContainerHeight = navbarContainer.offsetHeight;
            navbar.style.height = `${navbarContainerHeight + navigate.scrollHeight + 5}px`; // Adding some extra padding
        } else {
            navbar.style.height = '5em'; // Or any default height you need
        }
    }, [isOpen, isMobile]);

    const getNavLinkClass = (path) => {
        return location.pathname === path ? 'nav-item active' : 'nav-item';
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-container" ref={navbarContainerRef}>
                    <Link to="/">
                        <div className="logo-img">
                            <img
                                loading="lazy"
                                srcSet="https://dvw0mu5xdr2i4.cloudfront.net/87b1c617ca974355c6fb600d984c02d0.png"
                                className="the-img"
                                alt="Navbar"
                            />
                        </div>
                    </Link>
                    {!isMobile && (
                        <div className="navigate">
                            <Link to="/about" className="nav-link">
                                <div className={getNavLinkClass('/about')}>ABOUT</div>
                            </Link>
                            <Link to="/work" className="nav-link">
                                <div className={getNavLinkClass('/work')}>WORK</div>
                            </Link>
                            <Link to="/contact" className="nav-link">
                                <div className={getNavLinkClass('/contact')}>CONTACT</div>
                            </Link>
                            <Link to="/devlogs" className="nav-link">
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
                        <Link to="/about" className="nav-link">
                            <div className={getNavLinkClass('/about')}>ABOUT</div>
                        </Link>
                        <Link to="/work" className="nav-link">
                            <div className={getNavLinkClass('/work')}>WORK</div>
                        </Link>
                        <Link to="/contact" className="nav-link">
                            <div className={getNavLinkClass('/contact')}>CONTACT</div>
                        </Link>
                        <Link to="/devlogs" className="nav-link">
                            <div className={getNavLinkClass('/devlogs')}>DEVLOGS</div>
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
    .navbar {
    align-items: center;
    padding: 0 1em;
    height: 2.5rem; /* Adjust this to fit your design */
    box-sizing: border-box;
    background-color: #010004;
    border-bottom: none; /* Remove border-bottom from navbar */
    position: sticky;
    top: 0;
    z-index: 10000; /* Ensure the navbar is above other content */
    overflow: hidden;
    transition: height 0.3s ease;
}

    .navbar-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 100%; /* Ensures that the container is the same height as the navbar */
    }

    .logo-img {
        height: 100%; /* The logo container will be as tall as the navbar */
        width: auto; /* Adjust width as necessary */
        display: flex;
        align-items: center; /* Ensures the image is centered vertically */
    }

    .the-img {
        height: 100%; /* Image will cover the height of its container */
        width: 16rem; /* Maintains the aspect ratio of the image */
        object-fit: cover; /* Ensures the image covers the entire container */
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

    .navigate.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 100%;
        right: 0;
        width: 100%;
        border-bottom: 1px solid #e9ecef;
        opacity: 1;
        overflow: visible;
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
        position: relative; /* For absolute positioning of the border and circle */
        transition: color 0.3s ease;
    }

    .nav-link {
        text-decoration: none;
        color: inherit;
        position: relative; /* Ensure the circle is correctly positioned */
    }

    .nav-link:hover .nav-item {
        // color: #007bff;
    }
    .nav-item.active{
            //  color: #007bff; /* Change text color for active item */
            background: radial-gradient(circle at center, rgba(131, 113, 243, 0.5), rgba(69, 156, 236, 0) 41%);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* Smoky effect */
            border-radius: 1px; /* Rounded corners to match the background */
            // transform: translateY(-5px); /* Slight lift effect */
        }
    .nav-item.active::after {
        content: '';
        position: absolute;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px; /* Adjust height as needed */
        background: radial-gradient(70.31% 100% at 50% 0%, rgba(131, 113, 243, 0.5) 0%, rgba(69, 156, 236, 0) 100%), radial-gradient(130.16% 129.69% at 63.64% -12.5%, #8528FB 0%, rgba(86, 84, 74, 0.12) 100%), radial-gradient(80.68% 51.24% at 19.32% 40.62%, #1864B7 0%, rgba(23, 61, 102, 0.88) 100%), radial-gradient(28.98% 110.94% at 43.75% -31.25%, rgba(24, 17, 24, 0.53) 21.25%, #000000 100%), #030303;
        border-radius: 4px;
        transform: translateY(50%); /* Adjust if necessary to align with text */
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
            max-height: none;
            overflow: visible;
        }
    }
`}</style>
        </>
    );
}

export default Navbar;
