import React, { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';
import { myImage } from '../assets/images';
import Experience from '../components/Experience';
import GlareButton1 from '../components/GlareButton1';

function AboutPage() {
    const [curtainHeight, setCurtainHeight] = useState(100);
    const curtainRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const curtainRect = curtainRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const newHeight = Math.max(0, Math.min(100, 100 - (windowHeight - curtainRect.top) / windowHeight * 100));
            setCurtainHeight(newHeight);
            setScrollY(window.scrollY);
        }, 20);

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const curtainTransform = scrollY > 100
        ? `translate(-50%, ${Math.min(-50, (scrollY - 100) * 0.5)}%)`
        : 'translate(-50%, -50%)';

    return (
        <div className="about-page">
            <header className="header">
                <span className='header-text'>Helping you thrive in the digital world.</span>
                <div className="underline-2"></div>
            </header>

            <div className="intro">
                <div className="left">
                    <p className='intro-text'>
                        I help people from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
                    </p>
                    <p className='intro-text'>
                        I’m a software engineer with 3.5 years of experience and am currently studying Data Science at UMass Dartmouth. My passion for programming, math, and problem-solving drives me, and I’m eager to explore new opportunities and tackle exciting projects.
                    </p>
                    <GlareButton1 link="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/documents/Pillai_Resume_2024_folio.pdf">View Resume</GlareButton1>
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
                            <span className='service-subtitle'>DATA SCIENCE</span>
                            <p className='service-text'>Everything from building cool machine learning models to setting up smooth data pipelines and using cloud tech to get the most out of your data.</p>
                        </div>
                        <div className="card">
                            <span className='service-subtitle'>DEVELOPMENT</span>
                            <p className='service-text'>Four years of expertise in several programming languages and databases with a deep understanding of DevOps and Automation and CI/CD pipelines. </p>
                        </div>
                        <div className="card">
                            <span className='service-subtitle'>FULL PACKAGE</span>
                            <p className='service-text'>Blending machine learning know-how with hands-on experience in software development and cloud tech. I’ve got a knack for making complex systems work smoothly, from coding to wrangling big data on AWS.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="interests">
                <Experience />
            </div>
            <style jsx>{`
    .about-page {
        font-family: 'Josefin Sans', sans-serif;
        background-color: #FAF9F6;
    }
    .service-subtitle {
        font-weight: 600;
        font-size: 1.3rem;
    }
    .service-text {
        font-weight: 300;
        font-size: 1.3rem;
        line-height: 1.5;
    }
    .header {
        height:70vh;
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
        font-size: 3rem;
        font-weight: 300;
    }
    .intro-text {
        color: #E7EEFF;
        font-weight: 300;
        font-size: 1.4em;
        opacity: 0.8;
    }
    .underline-2 {
        width: 60vw;
        height: 4px;
        background-color: grey;
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
        flex: 6;
        padding-right: 20px;
        margin-right: 20px;
        background: rgba(0, 0, 0, 0.5);
        position: relative; /* Ensure positioning */
        z-index: 2; /* Higher z-index */
    }
    .right {
        flex: 4;
        position: relative; /* Ensure positioning */
        z-index: 1; /* Lower z-index */
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
        height: 130%;
        background-image: url(${myImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: background-position 0.1s ease;
        // transform: scale(,3);
    }
    .curtain-effect {
        position: relative;
        // height: 100vh;
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
        position: relative;
        top: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        color: #010004;
        text-align: center;
    }
    .services-title {
        margin: 3rem 0 2rem 0;
        font-size: 4rem;
        font-weight: 200;
    }
    .cards {
        display: flex;
        gap: 20px;
        flex-wrap: wrap; /* Allow cards to wrap */
        justify-content: center;
    }
    .card {
        background-color: transparent;
        padding: 20px;
        width: 250px;
        text-align: center;
        color: #010004;
        box-sizing: border-box;
    }
    .card h3 {
        margin-bottom: 10px;
        font-size: 20px;
    }
    .journey {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #010004;
    }
    .interests {
        display: flex;
        position: relative;
        background-color: #010004;
    }
    .interests .left {
        flex: 1;
    }
    .interests .right {
        flex: 1;
    }

    .cta-button{
    display:flex;
        width: 9rem;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .curtain{
        width: 190%;
        }
        .intro {
            flex-direction: column;
            padding: 2rem;
            height: auto;
        }
        .left {
            padding-right: 0;
            // background: rgba(0, 0, 0, 0.4);
            background-color: transparent;
            z-index: 2; /* Ensure .left is on top */
            position: relative; /* Ensure it's correctly positioned */
        }
        .right {
            z-index: 1; /* Ensure .right is behind */
            position: relative; /* Ensure it's correctly positioned */
        }
        .intro-text {
            font-size: 2em;
        }
        .services-title {
            font-size: 2.5rem;
            padding-top: 2rem;
        }
        .services{
        }
        .cards {
            flex-direction: column;
            gap: 20px; /* Adjust gap between cards */
        }
        .card {
            width: 100%;
            max-width: 300px; /* Ensure cards do not stretch too wide */
        }
    }
`}</style>



        </div>
    );
}

export default AboutPage;
