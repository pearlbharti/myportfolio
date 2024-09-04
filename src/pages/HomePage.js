import React, { useState, useEffect } from 'react';
import FeaturedWork from './FeaturedWork';
import SelectedBlogs from './SelectedBlogs';
import GlareButton1 from '../components/GlareButton1';
import { githubIcon, linkedInIcon, emailIcon, jumpingArrow } from '../assets/images';

function HomePage() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [showContent, setShowContent] = useState(false);

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

    useEffect(() => {
        // Set showContent to true after CTA button animation
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 800); // Delay should match CTA button animation duration

        return () => clearTimeout(timer);
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
                        <a href="https://github.com/snehsuresh" target="_blank" rel="noopener noreferrer">
                            <div className="github-icon icon" dangerouslySetInnerHTML={{ __html: githubIcon }}></div>
                        </a>
                        <a href="mailto:snehpillai02@gmail.com">
                            <div className="email-icon icon" dangerouslySetInnerHTML={{ __html: emailIcon }}></div>
                        </a>
                        <a href="https://www.linkedin.com/in/snehpillai/" target="_blank" rel="noopener noreferrer">
                            <div className="linkedin-icon icon" dangerouslySetInnerHTML={{ __html: linkedInIcon }}></div>
                        </a>
                    </div>
                    <GlareButton1 className="cta-button" link="/contact" onClick={() => console.log('Navigating to Contact page')}>Connect with Me!</GlareButton1>
                </div>
                {!hasScrolled && (
                    <div className="scroll-section">
                        <div className="arrow-image" dangerouslySetInnerHTML={{ __html: jumpingArrow }}></div>
                    </div>
                )}
                {showContent && (
                    <>
                        <FeaturedWork />
                        <SelectedBlogs />
                    </>
                )}
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
                    display: flex;
                    width: 100%;
                    padding-bottom: 70px;
                    flex-direction: column;
                    align-items: center;
                    height:90vh;
                }

                .intro-text {
                    color: #E7EEFF;
                    text-align: center;
                    width: calc(100vw - 4rem);
                    max-width: 60vw;
                    font: 200 calc(1.5vw + 0.5rem) 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    margin: 12rem 0 0;
                    opacity: 0;
                    animation: fadeIn 2s ease-in forwards;
                }

                .image-gallery {
                    display: flex;
                    color: #E7EEFF;
                    margin: 1rem 0 1rem 0;
                    gap: 1.5rem;
                    justify-content: space-between;
                    max-width: 600px;
                }
                .image-gallery a {
                    background-color: transparent; /* Makes the background of the icons transparent */
                    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for scaling and glow */
                }

                .image-gallery a:hover {
                    transform: scale(1.1); /* Scales the icon to 1.1 on hover */
                    // box-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* Whitish gradient glow */
                }

                .icon {
                    opacity: 0;
                    animation: fadeInIcon 0.5s ease-in forwards;
                }

                .github-icon {
                    animation-delay: 0.1s;
                }
                .email-icon {
                    animation-delay: 0.3s;
                }
                .linkedin-icon {
                    animation-delay: 0.5s;
                }

                .cta-button {
                    opacity: 0;
                    animation: fadeInButton 0.5s ease-in forwards;
                    animation-delay: 0.8s;
                }

                .scroll-section {
                    position: fixed;
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

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes fadeInIcon {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInButton {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
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
                    .landing{
                    height:100%}
                    .cta-button {
                        font-size: 20px;
                        padding: 10px 20px;
                    }
                        .intro-text {
                   
                    margin: 10rem 0 0;
                    // opacity: 0;
                    // animation: fadeIn 2s ease-in forwards;
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
