import React, { useEffect, useRef, useState } from 'react';

function SelectedBlogs() {
    const blogs = [
        {
            image: 'image1.jpg',
            title: 'Blog Title 1',
            date: 'August 16, 2024',
            content: 'This is the content of the blog. It will be scrollable vertically within the rectangle.',
        },
        {
            image: 'image2.jpg',
            title: 'Blog Title 2',
            date: 'August 15, 2024',
            content: 'This is another blog content. It will also be scrollable vertically.',
        },
        // Add more blogs as needed
    ];

    const [scrollIndex, setScrollIndex] = useState(0);
    const lastScrollTime = useRef(0);
    const SCROLL_DELAY = 500; // Delay between scrolls in milliseconds

    const handleWheel = (e) => {
        e.preventDefault(); // Prevent the default scrolling behavior

        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_DELAY) return;

        if (e.deltaY > 0) {
            // Scrolling down
            if (scrollIndex < blogs.length - 1) {
                setScrollIndex((prevIndex) => prevIndex + 1);
                lastScrollTime.current = now;
            }
        } else if (e.deltaY < 0) {
            // Scrolling up
            if (scrollIndex > 0) {
                setScrollIndex((prevIndex) => prevIndex - 1);
                lastScrollTime.current = now;
            }
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
        height: 80vh;
        position: relative;
    }

    .blog-main-title {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 28px;
        margin-bottom: 50px;
    }

    .blogs-wrapper {
        position: relative;
        display: flex;
        width: 80%;
        max-width: 800px;
        height: 400px;
        overflow: visible; /* Hide overflow to avoid layout shifting */
        justify-content: center;
    }

    .blogs-rectangle {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        border: 3px solid #e0e0e0; /* Add border effect */
    }

    .blog-item-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.7s ease; /* Fade effect duration */
        overflow: visible;
    }

    .blog-item {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
        padding: 20px;
        box-sizing: border-box;
        transition: opacity 0.7s ease; /* Fade effect duration */
        opacity: 0; /* Default opacity */
    }

    .blog-item-wrapper.active .blog-item {
        opacity: 1; /* Fully opaque when active */
    }

    .blog-image {
        width: 300px; /* Fixed size */
        height: 300px; /* Fixed size */
        position: absolute; /* Absolute positioning to ensure overflow */
        left: -50px; /* Adjust this to control overflow */
        top: 50%;
        transform: translateY(-50%); /* Center the image vertically */
        z-index: 1; /* Ensure the image is above the rectangle */
        border-radius: 20px; /* Rounded corners to match the image */
        border: 3px solid #e0e0e0; /* Add border effect */
    }

    .blog-image img {
        width: 100%; /* Ensure image fits container */
        height: 100%; /* Ensure image fits container */
        border-radius: 20px; /* Rounded corners */
        object-fit: cover;
    }

    .blog-content {
        flex: 0 0 60%; /* Limit blog content width to 60% */
        margin-left: 250px; /* Account for the image width + overflow */
        overflow: hidden;
    }

    .blog-title {
        font-size: 22px;
        margin: 0 0 10px 0;
    }

    .blog-date {
        font-size: 14px;
        color: #888;
        margin: 0 0 10px 0;
    }

    .blog-text {
        font-size: 16px;
        margin: 0 0 10px 0;
    }

    .read-more-button {
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
    }

    .read-more-button:hover {
        background-color: #0056b3;
    }

    .progress-bar-container {
        position: absolute;
        right: 10px;
        top: 0;
        height: 100%;
        width: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .blog-bubble {
        width: 15px;
        height: 15px;
        margin: 5px 0;
        border-radius: 50%;
        background-color: #ddd;
        transition: transform 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
    }

    .active-bubble {
        transform: scale(1.5);
        background-color: #333;
    }
`}</style>

        </div>
    );
}

export default SelectedBlogs;
