import React, { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash'; // Import throttle function

function AboutPage() {
    const [curtainHeight, setCurtainHeight] = useState(100);
    const curtainRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const curtainRect = curtainRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate the height based on scroll position
            const newHeight = Math.max(0, Math.min(100, 100 - (windowHeight - curtainRect.top) / windowHeight * 100));
            setCurtainHeight(newHeight);

            // Set scroll position
            setScrollY(window.scrollY);
        }, 20); // Throttle to every 10ms

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it once to set the initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const curtainTransform = scrollY > 100
        ? `translate(-50%, ${Math.min(-50, (scrollY - 100) * 0.5)}%)`
        : 'translate(-50%, -50%)';

    return (
        <div className="about-page">
            <header className="header">
                <span className='header-text'>Helping you thrive in the digital world.</span>
                <div className="underline"></div>
                <div className="underline-2"></div>
            </header>

            <div className="intro">
                <div className="left">
                    <p className='intro-text'>
                        I help people from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
                    </p>
                </div>
                <div className="right">
                    <div className="image-wrapper">
                        <div
                            className="image-container"
                            style={{
                                backgroundPositionY: `${(scrollY * 0.15)}px`
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="curtain-effect" ref={curtainRef}>
                <div className="curtain" style={{ height: `${curtainHeight}%`, transform: curtainTransform }}></div>
                <section className="services">
                    <div className="services-title">I can help you with</div>
                    <div className="cards">
                        <div className="card">
                            <span>DATA SCIENCE</span>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="card">
                            <span>DEVELOPMENT</span>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="card">
                            <span>FULL PACKAGE</span>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="interests">
                <div className="left">
                    <img src="" alt="Vertical" className="vertical-image" />
                </div>
                <div className="right">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            <style jsx>{`
                .about-page {
                    font-family: 'Josefin Sans', sans-serif;
                }
                .header {
                    height: 50vh;
                    text-align: center;
                    padding: 4em;
                    color: #E7EEFF;
                    background-color: #010004;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                }
                .header-text {
                    font-size: 4rem;
                    font-weight: 200;
                }
                .intro-text {
                    color: #E7EEFF;
                }
                .underline {
                    width: 50px;
                    height: 4px;
                    background-color: grey;
                    margin: 10px auto;
                }
                .underline-2 {
                    width: 60vw;
                    height: 2px;
                    background-color: #E7EEFF;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .intro {
                    display: flex;
                    padding: 5rem;
                    height: 100vh;
                    position: relative;
                    background-color: #010004;
                    overflow: hidden;
                    z-index: 100;
                }
                .left {
                    flex: 1;
                    padding-right: 20px;
                }
                .right {
                    flex: 1;
                    position: relative;
                }
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    border-radius: 50px;
                }
                .image-container {
                    width: 100%;
                    height: 120%;
                    background-image: url('https://dvw0mu5xdr2i4.cloudfront.net/IMG_7774.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: background-position 0.1s ease;
                }
                .curtain-effect {
                    position: relative;
                    height: 80vh;
                    z-index: 2;
                    overflow: hidden;
                }
                .curtain {
                    width: 120%;
                    background-color: #010004;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 3;
                    transition: height 0.1s ease, transform 0.5s ease;
                    border-radius: 80% 80% 100% 100%;
                }
                .services {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    z-index: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    color: #010004;
                    text-align: center;
                }
                .services-title {
                    margin: 0 0 40px 0;
                    font-size: 4rem;
                    font-weight: 200;
                }
                .cards {
                    display: flex;
                    gap: 40px;
                    justify-content: center;
                }
                .card {
                    background-color: transparent;
                    padding: 20px;
                    width: 250px;
                    text-align: center;
                    color: #010004;
                }
                .card h3 {
                    margin-bottom: 10px;
                    font-size: 20px;
                }
                .card p {
                    font-size: 14px;
                    line-height: 1.5;
                }
                .interests {
                    display: flex;
                    padding: 20px;
                    position: relative;
                    background-color: #010004;
                    height: 100vh;
                }
                .interests .left {
                    flex: 1;
                }
                .interests .right {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}

export default AboutPage;
