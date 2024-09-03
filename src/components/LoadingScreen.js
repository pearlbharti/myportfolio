import React, { useState, useEffect } from 'react';

function LoadingScreen({ onFinish }) {
    const [percentage, setPercentage] = useState(0);
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        // Increment the percentage every 20ms
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                // Set the logo to be visible after a short delay
                setTimeout(() => setLogoVisible(true), 500);
                return prev;
            });
        }, 20);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (logoVisible) {
            // Trigger the onFinish callback after a delay
            const timer = setTimeout(() => {
                onFinish(); // Call onFinish to load the homepage
            }, 2000); // Adjust this delay as needed

            // Cleanup timer on component unmount
            return () => clearTimeout(timer);
        }
    }, [logoVisible, onFinish]);

    return (
        <div className="loading-screen">
            <div className="background-blur"></div>
            <div className="content">
                <div className="progress-text">{percentage}%</div>
                {logoVisible && (
                    <img
                        src="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/home_page/sneh-logo.png"
                        alt="Loading Logo"
                        className="loading-logo"
                    />
                )}
            </div>

            <style jsx>{`
                .loading-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #010004;
                    overflow: hidden;
                    z-index: 9999;
                    flex-direction: column;
                }

                .background-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-size: cover;
                    background-position: center;
                    filter: blur(5px) brightness(30%);
                    z-index: 1;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }

                .loading-logo {
                    max-width: 80%;
                    max-height: 80%;
                    width: auto;
                    height: auto;
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 3s ease-in-out; /* Smooth fade-in */
                }

                .progress-text {
                    color: #fff;
                    font-size: 10rem;
                    font-weight: bold;
                    opacity: 0.5;
                    margin-bottom: 20px;
                }

                @media (max-width: 600px) {
                    .loading-logo {
                        max-width: 90%;
                        max-height: 70%;
                    }
                    .progress-text {
                        font-size: 16px;
                        display: none; /* Hide text on smaller screens */
                    }
                }
            `}</style>
        </div>
    );
}

export default LoadingScreen;
