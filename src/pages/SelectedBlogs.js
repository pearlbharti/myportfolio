import React, { useEffect, useRef, useState } from 'react';
import { blogs } from '../assets/blogData';

function SelectedBlogs() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const scrollAmount = useRef(0); // Track cumulative scroll amount
    const SCROLL_DELAY = 500; // Delay between scrolls in milliseconds
    const SCROLL_THRESHOLD = 100; // Amount of scroll required to trigger a change

    const handleWheel = (e) => {
        e.preventDefault(); // Prevent the default scrolling behavior

        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_DELAY) return;

        scrollAmount.current += e.deltaY; // Accumulate scroll amount

        if (scrollAmount.current > SCROLL_THRESHOLD) {
            // Scrolling down
            if (scrollIndex < blogs.length - 1) {
                setScrollIndex((prevIndex) => prevIndex + 1);
                lastScrollTime.current = now;
            }
            scrollAmount.current = 0; // Reset scroll amount
        } else if (scrollAmount.current < -SCROLL_THRESHOLD) {
            // Scrolling up
            if (scrollIndex > 0) {
                setScrollIndex((prevIndex) => prevIndex - 1);
                lastScrollTime.current = now;
            }
            scrollAmount.current = 0; // Reset scroll amount
        }
    };

    useEffect(() => {
        const container = document.querySelector('.blogs-rectangle');
        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [scrollIndex]);

    const scrollToIndex = (index) => {
        setScrollIndex(index);
    };

    return (
        <div className="selected-blogs-container">
            <h1 className="blog-main-title">Selected Blogs</h1>
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
                                    <button className="read-more-button">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="progress-bar-container">
                    {blogs.map((_, index) => (
                        <div
                            key={index}
                            className={`blog-bubble ${scrollIndex === index ? 'active-bubble' : ''}`}
                            onClick={() => scrollToIndex(index)}
                            style={{ top: `${(index / (blogs.length - 1)) * 100}%` }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .selected-blogs-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 60vh; /* Reduced height */
                    position: relative;
                    padding: 0 0 3rem 0; /* Adjusted padding */
                }

                .blog-main-title {
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 24px; /* Reduced font size */
                    margin-bottom: 30px; /* Reduced margin */
                    color: #E7EEFF;
                }

                .blogs-wrapper {
                    position: relative;
                    display: flex;
                    width: 70%; /* Reduced width */
                    max-width: 600px; /* Reduced max-width */
                    height: 300px; /* Reduced height */
                    overflow: visible;
                    justify-content: center;
                }

                .blogs-rectangle {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 15px; /* Reduced border-radius */
                    background: #010004;
                    box-shadow: 2px 2px 10px rgba(241, 231, 254, 0.7), /* Adjusted shadow */
                                -2px 2px 10px rgba(241, 231, 254, 0),
                                2px -2px 10px rgba(241, 231, 254, 0.7),
                                2px 2px 10px rgba(241, 231, 254, 0.7);
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
                }

                .blog-item {
                    display: flex;
                    width: 90%; /* Reduced width */
                    height: 80%; /* Reduced height */
                    flex-direction: row;
                    padding: 10px; /* Reduced padding */
                    box-sizing: border-box;
                    transition: opacity 0.7s ease;
                    opacity: 0;
                }

                .blog-item-wrapper.active .blog-item {
                    opacity: 1;
                }

                .blog-image {
                    width: 200px; /* Reduced size */
                    height: 200px; /* Reduced size */
                    position: absolute;
                    left: -30px; /* Adjusted positioning */
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                    border: 4px solid black;
                    border-radius: 15px; /* Reduced border-radius */
                }

                .blog-image img {
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    object-fit: cover;
                }

                .blog-content {
                    flex: 0 0 70%; /* Adjusted content width */
                    margin-left: 180px; /* Adjusted for image */
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .blog-title {
                    font-size: 18px; /* Reduced font size */
                    margin: 0 0 5px 0; /* Reduced margin */
                    color: #E7EEFF;
                }

                .blog-date {
                    font-size: 12px; /* Reduced font size */
                    color: #E7EEFF;
                    margin: 0 0 5px 0; /* Reduced margin */
                }

                .blog-text {
                    font-size: 14px; /* Reduced font size */
                    margin: 0 0 5px 0; /* Reduced margin */
                    color: #E7EEFF;
                }

                .read-more-button {
                    background-color: transparent;
                    color: #E7EEFF;
                    border: 2px solid #E7EEFF;
                    border-radius: 4px;
                    padding: 8px; /* Reduced padding */
                    cursor: pointer;
                    align-self: flex-end;
                }

                .read-more-button:hover {
                    background-color: rgba(231, 238, 255, 0.1);
                }

                .progress-bar-container {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    height: 100%;
                    width: 15px; /* Reduced width */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .blog-bubble {
                    width: 12px; /* Reduced size */
                    height: 12px; /* Reduced size */
                    margin: 3px 0; /* Reduced margin */
                    border-radius: 50%;
                    background-color: #ddd;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                    cursor: pointer;
                }

                .active-bubble {
                    transform: scale(1.3); /* Adjusted scale */
                    background-color: #333;
                }
            `}</style>
        </div>
    );
}

export default SelectedBlogs;
