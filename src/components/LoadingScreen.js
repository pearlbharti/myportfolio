import React, { useState, useEffect } from 'react';

function LoadingScreen() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            <div className="background-blur"></div>
            <img
                src="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/home_page/sneh-logo.png"
                alt="Loading Logo"
                className="loading-logo"
            />
            <div className="progress-text">{percentage}%</div>

            <style jsx>{`
    .loading-screen {
        position: fixed; /* Use fixed positioning */
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #010004;
        overflow: hidden;
        z-index: 9999; /* Ensure it's on top */
    }

    .background-blur {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/home_page/batcave.jpeg");
        background-size: cover;
        background-position: center;
        filter: blur(5px) brightness(30%);
        z-index: 1;
        /* Ensure the background is visible */
    }

    .loading-logo {
        max-width: 80%;
        max-height: 80%;
        width: auto;
        height: auto;
        opacity: 0;
        transform: translateY(10%); /* Adjusted translateY for higher positioning */
        animation: fadeUp 3s forwards ease-in-out;
        z-index: 2;
    }

    @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(10%); /* Adjusted translateY for higher positioning */
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .progress-text {
        position: absolute;
        bottom: 5%;
        right: 5%;
        color: #fff;
        font-size: 10rem;
        font-weight: bold;
        z-index: 2;
        opacity: 0.5;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        .loading-logo {
            max-width: 90%;
            max-height: 70%;
        }
        .progress-text {
            font-size: 16px;
            bottom: 20%;
            right: 10%;
            display: none;
        }
    }
`}</style>

        </div>
    );
}

export default LoadingScreen;
