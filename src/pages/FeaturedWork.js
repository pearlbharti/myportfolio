import React, { useState, useEffect } from 'react';
import GlareButton1 from '../components/GlareButton1';
import { featuredWork } from '../assets/workData';
import WorkCard from '../components/WorkCard';

function FeaturedWork() {
    const repeatArray = (arr, times) => Array.from({ length: times }, () => arr).flat();

    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);

    const cardWidth = 390;
    const cardMargin = 0;

    // Use different data for small screens
    const displayedFeaturedWork = isWideScreen ? repeatArray(featuredWork) : featuredWork;

    const handleResize = () => {
        setIsWideScreen(window.innerWidth > 800);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getCardStyle = (isActiveCard) => ({
        flex: `0 0 ${cardWidth}px`,
        height: `${cardWidth}px`,
        width: isWideScreen ? '' : `100%`,
        margin: `0 ${cardMargin}px`,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out, margin 0s ease-in-out',
        scrollSnapAlign: 'start',
        transform: isActiveCard ? `scale(1)` : 'scale(0.8)',
        zIndex: isActiveCard ? 1 : 0,
        border: isWideScreen ? (isActiveCard ? '8px solid #b8becc' : '4px solid #5c5f66') : 'none',
        borderRadius: '20px',
        boxSizing: 'border-box',
        marginLeft: isActiveCard ? `${cardMargin}px` : `${cardMargin}px`,
        marginRight: isActiveCard ? `${cardMargin}px` : `${cardMargin}px`,
    });

    const handleMouseEnter = (index) => {
        setHoveredCardIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredCardIndex(null);
    };

    return (
        <div className="featured-work-container">
            <h2 className="featured-work-title">FEATURED WORK</h2>

            <div className={`scroll-container ${isWideScreen ? '' : 'small-screen'}`}>
                <div className={`scroll-inner ${isWideScreen ? '' : 'vertical'}`}>
                    {displayedFeaturedWork.map((project, index) => {
                        const actualIndex = index % featuredWork.length;
                        const isActiveCard = hoveredCardIndex === actualIndex;
                        return (
                            <div
                                key={index}
                                style={getCardStyle(isActiveCard)}
                                className={`card ${isActiveCard ? 'active-card' : ''}`}
                                onMouseEnter={() => handleMouseEnter(actualIndex)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <WorkCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                    isActive={isActiveCard}
                                    isWideScreen={isWideScreen}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={`bubble-progress-bar-container ${isWideScreen ? '' : 'hidden'}`}>
                {featuredWork.map((_, index) => (
                    <div key={index} className={`bubble ${hoveredCardIndex === index ? 'active-bubble' : ''}`} onClick={() => handleMouseEnter(index)} />
                ))}
            </div>
            <GlareButton1 link="/work" onClick={() => console.log('Navigating to Work page')}>More Work</GlareButton1>

            <style jsx>{`
                .featured-work-container {
                    text-align: center;
                    padding: 20px;
                }

                .featured-work-title {
                    color: #E7EEFF;
                    font-size: 2rem;
                    font-weight: 300;
                    text-align: center;
                    margin: 3rem 0 1rem 0;
                    font-family: 'Josefin Sans';
                }

                .scroll-container {
                    font-family: 'Josefin Sans', sans-serif;
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    scrollbar-width: none; /* Firefox */
                    scroll-behavior: smooth; /* Smooth scrolling */
                    width: 100%; /* Full width */
                    position: relative;
                    padding: 3rem 0rem;
                }

                .scroll-container.small-screen {
                    display: block;
                    overflow-y: auto;
                    overflow-x: hidden;
                    padding: 1rem 0;
                }

                .scroll-container::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera */
                }

                .scroll-inner {
                    display: flex;
                    flex-wrap: nowrap;
                    width: ${cardWidth * displayedFeaturedWork.length + cardMargin * (displayedFeaturedWork.length - 1)}px;
                    text-align: center;
                    align-items: center;
                }

                .scroll-inner.vertical {
                    flex-direction: column;
                    width: 100%;
                }

                .bubble-progress-bar-container {
                    display: flex;
                    justify-content: center;
                    margin: 10px 0;
                }

                .bubble-progress-bar-container.hidden {
                    display: none;
                }

                .bubble {
                    width: 15px;
                    height: 15px;
                    margin: 0 5px;
                    border-radius: 50%;
                    background-color: #333;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                
                .bubble:hover {
                    transform: scale(1.1);
                    background-color: #bbb;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .active-bubble {
                    background-color: #ddd;
                    transform: scale(1.2);
                    height: 15px;
                    width: 30px;
                    border-radius: 70px;
                    background: linear-gradient(135deg, #333, #555);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    transition: transform 0.7s ease;
                }

                .more-work-button {
                    background-color: rgba(0, 0, 0, 1);
                    box-shadow: 0px 4px 4px rgba(30, 30, 30, 0.8);
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                    padding: 15px 30px;
                    font: 400 20px 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    display: inline-block;
                    white-space: nowrap;
                    margin: 20px auto 0;
                    cursor: pointer;
                    background: linear-gradient(267.58deg, rgba(122, 33, 237, 0) 82.42%, rgba(122, 33, 237, 0.3) 91.39%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #000000;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 50px rgba(122, 33, 237, 0.3);
                    border-radius: 20px;
                }

                .more-work-button:hover {
                    background-color: rgba(50, 50, 50, 1);
                }
            `}</style>
        </div>
    );
}

export default FeaturedWork;
