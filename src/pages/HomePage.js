import React, { useState, useEffect } from 'react';
import FeaturedWork from './FeaturedWork';
import SelectedBlogs from './SelectedBlogs';
import GlareButton1 from '../components/GlareButton1';
import { githubIcon, linkedInIcon, mediumIcon, emailIcon, jumpingArrow } from '../assets/images';
function HomePage() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="homepage">
                <div className="landing">
                    <div className="intro-text">
                        An experienced{" "}
                        <span style={{ fontWeight: 500 }}>Software Engineer</span> and a{" "}
                        <span style={{ fontWeight: 500 }}>Data Scientist</span>.<br />
                        Passionate about crafting optimum, innovative solutions.
                        <br />
                        Currently pursuing a Master's in Data Science at the University of
                        Massachusetts, Dartmouth.
                    </div>
                    <div className="image-gallery">
                        <div className="github-icon" dangerouslySetInnerHTML={{ __html: githubIcon }}></div>
                        <div className="email-icon" dangerouslySetInnerHTML={{ __html: emailIcon }}></div>
                        <div className="medium-icon" dangerouslySetInnerHTML={{ __html: mediumIcon }}></div>
                        <div className="linkedin-icon" dangerouslySetInnerHTML={{ __html: linkedInIcon }}></div>


                    </div>
                    <GlareButton1>Connect with Me!</GlareButton1>

                </div>
                {!hasScrolled && (
                    <div className="scroll-section">
                        <div className="arrow-image" dangerouslySetInnerHTML={{ __html: jumpingArrow }} >
                        </div>
                    </div>
                )}
                <FeaturedWork />
                <SelectedBlogs />
            </div>

            <style jsx>{`
                .homepage {
                    background-color: #010004;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    position: relative;
                }

                .landing {
                    // background-color: rgba(255, 252, 238, 1);
                    display: flex;
                    width: 100%;
                    height: 90vh;
                    padding-bottom: 70px;
                    flex-direction: column;
                    align-items: center;
                }

                .intro-text {
                    color: #E7EEFF;
                    text-align: center;
                    width: calc(100vw - 4rem); /* Adjusts width relative to the viewport width with 2rem padding on each side */
                    max-width: 70vw; /* Ensure it doesn't exceed 70% of the viewport width */
                    font: 200 calc(1.5vw + 0.8rem) 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    margin: 10rem 0 0; /* Adjusted for centering */
                }

                .image-gallery {
                    display: flex;
                    color: #E7EEFF;
                    margin-top: 45px;
                    gap: 1.5rem; /* Reduced space between images */
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

                .scroll-section {
                    position: fixed; /* Fixed positioning to stay at the bottom-left of the screen */
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px;
                    transition: opacity 0.5s ease;
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
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;500&display=swap');
            `}</style>
        </>
    );
}

export default HomePage;
