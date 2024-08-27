import React, { useEffect, useRef, useState } from 'react';
import { blogs } from '../assets/blogData';

function SelectedBlogs() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const scrollAmount = useRef(0);
    const SCROLL_DELAY = 500;
    const SCROLL_THRESHOLD = 100;

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

    // Handle touch events
    const handleTouchStart = (e) => {
        e.preventDefault();
        if (scrollIndex < blogs.length - 1) {
            setScrollIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        const container = document.querySelector('.blogs-rectangle');
        container.addEventListener('wheel', handleWheel);
        container.addEventListener('touchstart', handleTouchStart);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
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
                                // Adding touch event handler for mobile
                                onTouchStart={handleTouchStart}
                            >
                                <div className="blog-image">
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <div className="blog-content">
                                    <h2 className="blog-title">{blog.title}</h2>
                                    <p className="blog-date">{blog.date}</p>
                                    <p className="blog-text">{blog.content}</p>
                                    {scrollIndex === index && (
                                        <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                            <button className="read-more-button">
                                                Read More
                                            </button>
                                        </a>
                                    )}
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
        height: 100vh;
        position: relative;
        padding: 0 0 3rem 0;
    }

    .blog-main-title {
        font-family: 'Josefin Sans', sans-serif;
        color: #E7EEFF;
        font-size: 3rem;
        font-weight: 400;
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
        margin: 0 0 5px 0;
        color: #e7eeff;
    }

    .blog-date {
        font-size: 0.9rem;
        color: #e7eeff;
        margin: 0 0 2em 0;
    }

    .blog-text {
        font-size: 1.1rem;
        margin: 0 0 5px 0;
        color: #e7eeff;
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
        position: absolute;
        bottom: 0;
        right: 0;
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
        background-color: #ddd;
        transition: transform 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
    }

    .active-bubble {
        transform: scale(1.3);
        background-color: #333;
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
    }
`}</style>
        </div>
    );
}

export default SelectedBlogs;
