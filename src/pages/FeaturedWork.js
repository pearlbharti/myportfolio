import React, { useState, useEffect, useRef } from 'react';
import GlareButton1 from '../components/GlareButton1';

function FeaturedWork() {
    const [leftMostCardIndex, setLeftMostCardIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const cardData = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];
    const duplicatedCardData = [...cardData, ...cardData, ...cardData]; // Duplicate cards

    // Set card width and margin
    const cardWidth = 600; // Example width, adjust as needed
    const cardMargin = 5; // Space between cards

    // Update card width based on container width
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const cardWidthWithMargin = cardWidth + cardMargin;

        const handleScroll = () => {
            const scrollLeft = scrollContainer.scrollLeft;
            const newIndex = Math.floor((scrollLeft + cardWidth / 2) / cardWidthWithMargin) % cardData.length;
            setLeftMostCardIndex(newIndex);
        };

        const handleResize = () => {
            if (scrollContainer) {
                // Calculate initial scroll position based on the current width and number of cards
                const initialScrollLeft = cardWidthWithMargin * cardData.length;
                scrollContainer.scrollLeft = initialScrollLeft;
                handleScroll();
            }
        };

        // Initialize scroll position
        handleResize();

        scrollContainer.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [cardWidth, cardMargin]);

    // Helper function to get the card style
    const getCardStyle = (isCenterCard) => ({
        flex: `0 0 ${cardWidth}px`,
        height: `${cardWidth}px`,
        margin: `0 ${cardMargin}px`,
        backgroundColor: '#ddd',
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out, margin 0.5s ease-in-out',
        scrollSnapAlign: 'center',
        transform: isCenterCard ? `scale(1.0)` : 'scale(0.8)',
        zIndex: isCenterCard ? 1 : 0,
        boxShadow: isCenterCard ? '0 15px 30px rgba(0, 0, 0, 0.4)' : 'none',
        backgroundColor: isCenterCard ? 'rgba(0, 0, 0, 0.15)' : '#ddd',
        marginLeft: isCenterCard ? `${cardMargin * 1.2}px` : `${cardMargin}px`,
        marginRight: isCenterCard ? `${cardMargin * 1.2}px` : `${cardMargin}px`,
    });

    return (
        <div className="featured-work-container">
            <h2 className="featured-work-title">Featured Work</h2>

            <div className="scroll-container" ref={scrollContainerRef}>
                <div className="scroll-inner">
                    {duplicatedCardData.map((project, index) => {
                        const isCenterCard = leftMostCardIndex === (index % cardData.length);
                        return (
                            <div
                                key={index}
                                style={getCardStyle(isCenterCard)}
                                className={`card ${isCenterCard ? 'center-card' : ''}`}
                            >
                                {project}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bubble-progress-bar-container">
                {[...Array(cardData.length)].map((_, index) => (
                    <div key={index} className={`bubble ${leftMostCardIndex === index ? 'active-bubble' : ''}`} />
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
                    color
                }

                .scroll-container {
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
                    width: ${cardWidth * duplicatedCardData.length + cardMargin * (duplicatedCardData.length - 1)}px;
                    text-align: center;
                }

                .card {
                    background-color: #ddd;
                    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out, margin 0.5s ease-in-out;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                    font-family: 'Josefin Sans', sans-serif;
                    position: relative;
                    scroll-snap-align: center;
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
