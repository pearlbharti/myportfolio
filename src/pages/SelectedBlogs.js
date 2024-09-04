import React, { useEffect, useRef, useState } from 'react';
import { blogs } from '../assets/blogData';

function SelectedBlogs() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const scrollAmount = useRef(0);
    const SCROLL_DELAY = 500;
    const SCROLL_THRESHOLD = 100;
    const canScroll = useRef(true); // Add a flag for scrolling
    const touchStartY = useRef(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    // Handle mouse wheel scroll
    const handleWheel = (e) => {
        e.preventDefault();

        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_DELAY) return;

        scrollAmount.current += e.deltaY;

        if (scrollAmount.current > SCROLL_THRESHOLD) {
            if (scrollIndex < blogs.length - 1) {
                setScrollIndex((prevIndex) => prevIndex + 1);
                lastScrollTime.current = now;
            }
            scrollAmount.current = 0;
        } else if (scrollAmount.current < -SCROLL_THRESHOLD) {
            if (scrollIndex > 0) {
                setScrollIndex((prevIndex) => prevIndex - 1);
                lastScrollTime.current = now;
            }
            scrollAmount.current = 0;
        }
    };

    // Handle touch events for scrolling
    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        if (touchStartY.current === null) return;

        const touchEndY = e.touches[0].clientY;
        const touchDifference = touchStartY.current - touchEndY;

        if (touchDifference > SCROLL_THRESHOLD) {
            if (scrollIndex < blogs.length - 1) {
                setScrollIndex((prevIndex) => prevIndex + 1);
            }
            touchStartY.current = null; // Reset touch start
        } else if (touchDifference < -SCROLL_THRESHOLD) {
            if (scrollIndex > 0) {
                setScrollIndex((prevIndex) => prevIndex - 1);
            }
            touchStartY.current = null; // Reset touch start
        }
    };

    // Handle touch event for buttons
    const handleButtonClick = (e) => {
        e.stopPropagation(); // Prevent the event from propagating to parent elements
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        const container = document.querySelector('.blogs-rectangle');
        container.addEventListener('wheel', handleWheel);
        if (!isSmallScreen) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeEventListener('wheel', handleWheel);
            if (!isSmallScreen) {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
            }
        };
    }, [scrollIndex, isSmallScreen]);

    const scrollToIndex = (index) => {
        setScrollIndex(index);
    };

    const handlePrevClick = () => {
        if (scrollIndex > 0) {
            setScrollIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (scrollIndex < blogs.length - 1) {
            setScrollIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className="selected-blogs-container">
            <h1 className="blog-main-title">SELECTED BLOGS</h1>
            <div className="blogs-wrapper">
                <div className="blogs-rectangle">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className={`blog-item-wrapper ${scrollIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="blog-item"
                                style={{
                                    opacity: scrollIndex === index ? 1 : 0,
                                }}
                            >
                                <div className="blog-image">
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <div className="blog-content">
                                    <h2 className="blog-title">{blog.title}</h2>
                                    <p className="blog-date">{blog.date}</p>
                                    <p className="blog-text">{blog.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {blogs[scrollIndex] && (
                        <a href={blogs[scrollIndex].link} target="_blank" rel="noopener noreferrer">
                            <button
                                className="read-more-button"
                                onTouchStart={handleButtonClick}
                                onClick={handleButtonClick}
                            >
                                Read More
                            </button>
                        </a>
                    )}
                </div>
                <div className="progress-bar-container">
                    {blogs.map((_, index) => (
                        <div
                            key={index}
                            className={`blog-bubble ${scrollIndex === index ? 'current-bubble' : ''}`}
                            onClick={() => scrollToIndex(index)}
                            style={{ top: `${(index / (blogs.length - 1)) * 100}%` }}
                        />
                    ))}
                </div>
            </div>

            {isSmallScreen && (
                <div className="nav-buttons">
                    <button className="nav-button prev-button" onClick={handlePrevClick}>Prev</button>
                    <button className="nav-button next-button" onClick={handleNextClick}>Next</button>
                </div>
            )}

            <style jsx>{`
                .selected-blogs-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                    padding: 0 0 3rem 0;
                }

                .blog-main-title {
                    font-family: 'Josefin Sans', sans-serif;
                    color: #E7EEFF;
                    font-size: 2rem;
                    font-weight: 300;
                    text-align: center;
                    margin: 3rem 0 10rem 0;
                }

                .blogs-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 70%;
                    max-width: 600px;
                    height: 300px;
                    overflow: visible;
                    justify-content: center;
                }

                .blogs-rectangle {
                    position: relative;
                    width: calc(100% - 20px); /* Subtracted width for progress bar */
                    height: 400px;
                    border-radius: 15px;
                    background: #010004;
                    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.42);
                    display: flex;
                }

                .blog-item-wrapper {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 0.7s ease;
                    overflow: visible;
                    z-index: 1; /* Default z-index */
                }

                .blog-item {
                    display: flex;
                    width: 90%;
                    height: 80%;
                    flex-direction: row;
                    padding: 10px;
                    box-sizing: border-box;
                    transition: opacity 0.7s ease;
                    opacity: 0;
                    pointer-events: none; /* Add this line */
                }

                .blog-item-wrapper.active .blog-item {
                    opacity: 1;
                    pointer-events: auto; /* Add this line */
                }

                .blog-item-wrapper.active {
                    z-index: 2; /* Higher z-index for the active item */
                }

                .blog-image {
                    width: 200px;
                    height: 200px;
                    position: absolute;
                    left: -30px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                    border-radius: 15px;
                }

                .blog-image img {
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    object-fit: cover;
                    filter: brightness(0.6);
                }

                .blog-content {
                    flex: 0 0 70%;
                    margin-left: 10rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    text-align: left;
                    padding-right: 1rem;
                    position: relative;
                }

                .blog-title {
                    font-size: 1.5rem;
                    font-weight:400;
                    margin: 0 0 0.5rem 0;
                    color: #e7eeff;
                    font-family: 'Josefin Sans', sans-serif;
                }

                .blog-date {
                    font-size: 0.9rem;
                    color: #e7eeff;
                    margin: 0 0 2em 0;
                    font-family: 'Josefin Sans', sans-serif;
                }

                .blog-text {
                    font-size: 1.2rem;
                    font-weight:300;
                    margin: 0 0 1rem 0;
                    color: #e7eeff;
                    font-family: 'Josefin Sans', sans-serif;
                }

                .read-more-button {
                    --button_radius: 0.5em;
                    --button_color: #000000;
                    --button_outline_color: #ffffff;
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    border: 2px solid var(--button_outline_color);
                    border-radius: var(--button_radius);
                    background: transparent;
                    padding: 0.5em 1.25em;
                    color: white;
                    transform: translateY(-0.2em);
                    transition: transform 0.1s ease;
                    cursor: pointer;
                    position: absolute; /* Position it relative to the .blogs-rectangle */
                    bottom: 1rem; /* Adjust as needed */
                    right: 1rem; /* Adjust as needed */
                    z-index: 3; /* Ensure it stays above other content */
                }

                .read-more-button:hover {
                    transform: translateY(-0.33em);
                }

                .read-more-button:active {
                    transform: translateY(0);
                }

                .progress-bar-container {
                    position: relative;
                    right: -15px;
                    height: 100%;
                    width: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .blog-bubble {
                    width: 12px;
                    height: 12px;
                    margin: 8px 0;
                    border-radius: 50%;
                    background-color: #333;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    // transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    // transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
                }

                .blog-bubble:hover {
                    transform: scale(1.1);
                    background-color: #bbb;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .current-bubble {
                    transform: scale(1.2);
                    height: 24px;
                    width: 12px;
                    // background-color: #ff5e57;
                    border-radius: 12px; /* Makes it more of a pill shape */
                    background: linear-gradient(135deg, #333, #555);
                    background-color: #ddd;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    transition: transform 0.7s ease; /* Adjust the duration (0.5s) and easing (ease) as desired */
                }
                .nav-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .nav-button {
                    --button_radius: 0.5em;
                    --button_color: #000000;
                    --button_outline_color: #ffffff;
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    border: 2px solid var(--button_outline_color);
                    border-radius: var(--button_radius);
                    background: transparent;
                    padding: 0.5em 1.25em;
                    color: white;
                    transform: translateY(-0.2em);
                    transition: transform 0.1s ease;
                    cursor: pointer;
                }

                .nav-button:hover {
                    transform: translateY(-0.33em);
                }

                .nav-button:active {
                    transform: translateY(0);
                }

                @media (max-width: 768px) {
                    .blogs-wrapper {
                        width: 90%;
                        height: 300px;
                    }

                    .blogs-rectangle {
                        height: 350px;
                    }

                    .blog-image {
                        width: 150px;
                        height: 150px;
                        left: 50%;
                        top: 0;
                        transform: translate(-50%, -50%);
                    }

                    .blog-content {
                        margin-left: 0;
                        padding: 1rem;
                    }

                    .blog-title {
                        font-size: 1.2rem;
                        margin: 70px 0 5px 0;
                    }

                    .blog-date {
                        font-size: 0.8rem;
                    }

                    .blog-text {
                        display: none;
                    }

                    .read-more-button {
                        font-size: 12px;
                    }

                    .nav-buttons {
                        display: flex;
                        gap: 1rem;
                        margin-top: 2.5rem;
                    }

                    .nav-button {
                        --button_radius: 0.5em;
                        --button_color: #000000;
                        --button_outline_color: #ffffff;
                        font-family: 'Josefin Sans', sans-serif;
                        font-size: 14px;
                        font-weight: bold;
                        border: 2px solid var(--button_outline_color);
                        border-radius: var(--button_radius);
                        background: transparent;
                        padding: 0.5em 1.25em;
                        color: white;
                        transform: translateY(-0.2em);
                        transition: transform 0.1s ease;
                        cursor: pointer;
                    }

                    .nav-button:hover {
                        transform: translateY(-0.33em);
                    }

                    .nav-button:active {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default SelectedBlogs;
