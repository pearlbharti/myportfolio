import React from 'react';
import FeaturedWork from './FeaturedWork'
import SelectedBlogs from './SelectedBlogs';
function HomePage() {
    return (
        <>
            <div className="homepage">
                <div className="landing">
                    <div className="intro-text">
                        An experienced{" "}
                        <span style={{ fontWeight: 400 }}>Software Engineer</span> and a{" "}
                        <span style={{ fontWeight: 400 }}>Data Scientist</span>.<br />
                        Passionate about crafting optimum, innovative solutions.
                        <br />
                        Currently pursuing a Master's in Data Science at the University of
                        Massachusetts, Dartmouth.
                    </div>
                    <div className="image-gallery">
                        <img
                            loading="lazy"
                            src="/img1"
                            className="image-small-1"
                            alt="Description"
                        />
                        <img
                            loading="lazy"
                            src="/img-2"
                            className="image-small-2"
                            alt="Description"
                        />
                        <img
                            loading="lazy"
                            src="img-3"
                            className="image-small-3"
                            alt="Description"
                        />
                        <img
                            loading="lazy"
                            src="img-4"
                            className="image-small-4"
                            alt="Description"
                        />
                    </div>
                    <div className="cta-button">Connect with me!</div>
                </div>
                <div className="scroll-section">
                    <img
                        loading="lazy"
                        src="img-5"
                        className="arrow-image"
                        alt="Description"
                    />
                    <div className="scroll-text">SCROLL DOWN</div>
                </div>
                <FeaturedWork />
                <SelectedBlogs />
            </div>

            <style jsx>{`
                .homepage {
                    background-color: rgba(255, 255, 255, 1);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    position:relative;
                }

                .landing {
                    background-color: rgba(255, 252, 238, 1);
                    display: flex;
                    width: 100%;
                    padding-bottom: 70px;
                    flex-direction: column;
                    align-items: center;
                }

                .intro-text {
                    color: rgba(0, 0, 0, 1);
                    text-align: center;
                    width: calc(100vw - 4rem); /* Adjusts width relative to the viewport width with 2rem padding on each side */
                    max-width: 70vw; /* Ensure it doesn't exceed 70% of the viewport width */
                    font: 300 calc(1.5vw + 1rem) 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    margin: 278px 0 0; /* Adjusted for centering */
                }

                .image-gallery {
                    display: flex;
                    margin-top: 45px;
                    gap: 10px; /* Reduced space between images */
                    justify-content: space-between;
                    max-width: 600px; /* Adjust as needed */
                }

                .image-small-1, .image-small-2, .image-small-3, .image-small-4 {
                    aspect-ratio: 1;
                    object-fit: contain;
                    object-position: center;
                }

                .image-small-1 {
                    width: 40px;
                }
                .image-small-2 {
                    width: 45px;
                }
                .image-small-3 {
                    width: 43px;
                }
                .image-small-4 {
                    width: 40px;
                }

                .cta-button {
                    border-radius: 15px;
                    background-color: rgba(0, 0, 0, 1);
                    box-shadow: 0px 4px 4px rgba(30, 30, 30, 0.8);
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                    padding: 15px 30px; /* Adjust padding to fit text */
                    font: 400 20px 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    display: inline-block; /* Adjust width to fit text */
                    white-space: nowrap; /* Prevent text from wrapping */
                    margin: 38px auto; /* Centering */
                }

                .scroll-section {
                    position: fixed; /* Fixed positioning to stay at the bottom-left of the screen */
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px;
                }

                .arrow-image {
                    width: 83px;
                    z-index: 1;
                    animation: jump 1s ease-in-out infinite;
                }

                .scroll-text {
                    margin-top: -10px;
                    color: rgba(0, 0, 0, 1);
                    font: 200 20px 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                }

                .background-image {
                    aspect-ratio: 1.54;
                    object-fit: contain;
                    object-position: center;
                    width: 100%;
                }

                @keyframes jump {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                @media (max-width: 600px) {
                    .cta-button {
                        font-size: 20px; /* Adjust font size for smaller screens */
                        padding: 10px 20px; /* Adjust padding accordingly */
                    }
                }
            `}</style>
        </>
    );
}

export default HomePage;
