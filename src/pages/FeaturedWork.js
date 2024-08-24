import React, { useState, useEffect, useRef } from 'react';
import GlareButton1 from '../components/GlareButton1';
import { featuredWork } from '../assets/workData';
import WorkCard from '../components/WorkCard';

function FeaturedWork() {
    const repeatArray = (arr, times) => Array.from({ length: times }, () => arr).flat();
    const [leftMostCardIndex, setLeftMostCardIndex] = useState(0);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
    const [isAnimationActive, setIsAnimationActive] = useState(true);
    const scrollContainerRef = useRef(null);

    const cardWidth = 400;
    const cardMargin = 5;
    const cardWidthWithMargin = cardWidth + cardMargin;

    // Duplicate the featuredWork array to create an infinite scroll effect
    const duplicatedFeaturedWork = repeatArray(featuredWork, 10);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            if (!isAnimationActive && isWideScreen) {
                const scrollLeft = scrollContainer.scrollLeft;
                const centerOffset = scrollContainer.clientWidth / 2;
                const index = Math.floor((scrollLeft + centerOffset) / cardWidthWithMargin) % featuredWork.length;
                setLeftMostCardIndex(index);
            }
        };

        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 800);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [cardWidthWithMargin, isWideScreen, isAnimationActive]);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const initialScrollPosition = (duplicatedFeaturedWork.length / 2) * cardWidthWithMargin - scrollContainer.clientWidth / 2;
        const targetScrollPosition = initialScrollPosition;
        const duration = 0; // duration of the scroll in milliseconds
        const startTime = performance.now();

        setIsAnimationActive(true);

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smoother easing function for natural feel
            const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

            scrollContainer.scrollLeft = targetScrollPosition * easeOutExpo(progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                // Ensure exact final position and update active card
                scrollContainer.scrollLeft = targetScrollPosition;
                const scrollLeft = scrollContainer.scrollLeft;
                const centerOffset = scrollContainer.clientWidth / 2;
                const finalIndex = Math.floor((scrollLeft + centerOffset) / cardWidthWithMargin) % featuredWork.length;
                setLeftMostCardIndex(finalIndex);
                setIsAnimationActive(false);
            }
        };

        requestAnimationFrame(animateScroll);
    }, [cardWidthWithMargin, duplicatedFeaturedWork.length]);

    const getCardStyle = (isActiveCard) => ({
        flex: `0 0 ${cardWidth}px`,
        height: `${cardWidth}px`,
        margin: `0 ${cardMargin}px`,
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out, margin 0.5s ease-in-out',
        scrollSnapAlign: 'start',
        transform: isActiveCard ? `scale(1)` : 'scale(0.8)',
        zIndex: isActiveCard ? 1 : 0,
        boxShadow: isActiveCard ? '0 15px 30px rgba(0, 0, 0, 0.4)' : 'none',
        marginLeft: isActiveCard ? `${cardMargin}px` : `${cardMargin}px`,
        marginRight: isActiveCard ? `${cardMargin}px` : `${cardMargin}px`,
    });

    return (
        <div className="featured-work-container">
            <h2 className="featured-work-title">Featured Work</h2>

            <div className="scroll-container" ref={scrollContainerRef}>
                <div className="scroll-inner">
                    {duplicatedFeaturedWork.map((project, index) => {
                        const actualIndex = index % featuredWork.length;
                        const isActiveCard = !isAnimationActive && isWideScreen && leftMostCardIndex === actualIndex;
                        return (
                            <div
                                key={index}
                                style={getCardStyle(isActiveCard)}
                                className={`card ${isActiveCard ? 'active-card' : ''}`}
                            >
                                <WorkCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    isActive={isActiveCard}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bubble-progress-bar-container">
                {featuredWork.map((_, index) => (
                    <div key={index} className={`bubble ${!isAnimationActive && isWideScreen && leftMostCardIndex === index ? 'active-bubble' : ''}`} />
                ))}
            </div>
            <GlareButton1>More Work</GlareButton1>

            <style jsx>{`
                .featured-work-container {
                    text-align: center;
                    padding: 20px;
                }

                .featured-work-title {
                    font-family: 'Josefin Sans', sans-serif;
                    font-size: 28px;
                    margin-bottom: 20px;
                    color: #E7EEFF;
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
                }

                .scroll-container::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera */
                }

                .scroll-inner {
                    display: flex;
                    width: ${cardWidth * duplicatedFeaturedWork.length + cardMargin * (duplicatedFeaturedWork.length - 1)}px;
                    text-align: center;
                }

                .bubble-progress-bar-container {
                    display: flex;
                    justify-content: center;
                    margin: 10px 0;
                }

                .bubble {
                    width: 15px;
                    height: 15px;
                    margin: 0 5px;
                    border-radius: 50%;
                    background-color: #ddd;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }

                .active-bubble {
                    transform: scale(1.5);
                    background-color: #333;
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
