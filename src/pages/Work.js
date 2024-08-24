import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import { confidenceInterval } from '../assets/images';
import ProjectWork from '../components/ProjectWork';


function Work() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [toggle, setToggle] = useState('data');
    const [showImage, setShowImage] = useState(false);
    const [text, setText] = useState("");
    const [displayedText, setDisplayedText] = useState("I offer no proof, only confidence.");
    const [animationState, setAnimationState] = useState('typing');


    const projectDivRef = useRef(null);
    const listProjectRef = useRef(null);
    const contentcontainerRef = useRef(null);

    const [curtainHeight, setCurtainHeight] = useState(100);
    const curtainRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const typingDuration = 2000; // Duration for typing animation
        const pauseDuration = 500; // Duration of pause before backspacing starts
        const backspacingDuration = 1000; // Duration for backspacing animation
        const newTextTypingDuration = 500; // Duration for typing "No, Wait!" text

        if (animationState === 'typing') {
            setText(displayedText); // Show the full text during typing

            const typingTimeout = setTimeout(() => {
                setAnimationState('pause');
            }, typingDuration);

            return () => clearTimeout(typingTimeout);
        }

        if (animationState === 'pause') {
            const pauseTimeout = setTimeout(() => {
                setAnimationState('backspacing');
            }, pauseDuration);

            return () => clearTimeout(pauseTimeout);
        }

        if (animationState === 'backspacing') {
            // Clear the text immediately to start backspacing

            const backspaceTimeout = setTimeout(() => {
                setText('');
                setText('No, Wait!'); // Set the new text after backspacing
                setAnimationState('typing-new-text'); // Start typing animation for the new text
            }, backspacingDuration);

            return () => clearTimeout(backspaceTimeout);
        }

        if (animationState === 'typing-new-text') {
            // This state handles the typing animation for "No, Wait!"
            const typingNewTextTimeout = setTimeout(() => {
                setAnimationState('done'); // Transition to the final state after typing
            }, newTextTypingDuration);

            return () => clearTimeout(typingNewTextTimeout);
        }
    }, [animationState, displayedText]);

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

    useEffect(() => {
        const handleScroll = () => {
            if (!projectDivRef.current) return;

            // const scrollTop = projectDivRef.current.scrollTop;
            const projectElements = document.querySelectorAll('.project');
            const viewportHeight = window.innerHeight;
            let closestIndex = 0;
            let closestDistance = Infinity;

            projectElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = viewportHeight / 2;

                const distance = Math.abs(viewportCenter - elementCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveProject(closestIndex);
        };

        const projectDivElement = projectDivRef.current;
        projectDivElement.addEventListener('scroll', handleScroll);

        return () => {
            projectDivElement.removeEventListener('scroll', handleScroll);
        };
    }, [toggle]);

    useEffect(() => {
        const listProjectElement = listProjectRef.current;
        if (listProjectElement) {
            const itemElements = listProjectElement.querySelectorAll('.list-project-item');
            if (itemElements.length > 0) {
                const activeItem = itemElements[activeProject];
                if (activeItem) {
                    const itemHeight = activeItem.clientHeight;
                    const containerHeight = listProjectElement.clientHeight;
                    const scrollPosition = activeItem.offsetTop - (containerHeight / 2) + (itemHeight / 2);
                    listProjectElement.scrollTop = scrollPosition;
                }
            }
        }
    }, [activeProject, toggle]);

    useEffect(() => {
        const listProjectElement = listProjectRef.current;
        if (listProjectElement) {
            const itemElements = listProjectElement.querySelectorAll('.list-project-item');
            if (itemElements.length > 0) {
                const initialItem = itemElements[0];
                if (initialItem) {
                    const itemHeight = initialItem.clientHeight;
                    const containerHeight = listProjectElement.clientHeight;
                    const scrollPosition = initialItem.offsetTop - (containerHeight / 2) + (itemHeight / 2);
                    listProjectElement.scrollTop = scrollPosition;
                }
            }
        }
    }, [toggle]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowImage(true);
    //     }, 700);

    //     return () => clearTimeout(timer);
    // }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (contentcontainerRef.current) {
                console.log('Scrolling to top');
                contentcontainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

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

    const curtainTransform = scrollY > 100
        ? `translate(-50%, ${Math.min(-50, (scrollY - 100) * 0.5)}%)`
        : 'translate(-50%, -50%)';

    return (
        <div className="projects-page">
            <header className="header-work">
                <div className="header-bg" dangerouslySetInnerHTML={{ __html: confidenceInterval }}>
                </div>
                <div className="typing-container">
                    <span className={`header-text typing-text ${animationState}`}>{text}</span>
                </div>
            </header>
            <div className="curtain-effect" ref={curtainRef}>
                <div className="curtain" style={{ height: `${curtainHeight}%`, transform: curtainTransform }}></div>
                <div className="projects-page" ref={contentcontainerRef}>
                    <ProjectWork
                        toggle={toggle}
                        setToggle={setToggle}
                        activeProject={activeProject}
                        setActiveProject={setActiveProject}
                        curtainHeight={curtainHeight}
                        curtainTransform={curtainTransform}
                        showImage={showImage}
                        hasScrolled={hasScrolled}
                        contentcontainerRef={contentcontainerRef}
                        projectDivRef={projectDivRef}
                        listProjectRef={listProjectRef}
                    />
                </div>

            </div>
            {showImage && !hasScrolled && (
                <div className="no-wait-container">
                    <div className="jumping-image">
                        <svg width="47" height="108" viewBox="0 0 47 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46 1.00024L23.5 22.0002L1 1.00024" stroke="#C1DAFF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" />
                            <path d="M46 43L23.5 64L1 43" stroke="#C1DAFF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" />
                            <path d="M46 63.9998L23.5 84.9998L1 63.9998" stroke="#C1DAFF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" />
                            <path d="M46 85L23.5 106L1 85" stroke="#C1DAFF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" />
                            <path d="M46 22L23.5 43L1 22" stroke="#C1DAFF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="no-wait-text">No, Wait!</div>
                </div>
            )}
            <style jsx>{`
                .projects-page {
                    font-family: 'Josefin Sans', sans-serif;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                .header-work {
                    background-color: #010004;
                    height: 60vh;
                    text-align: center;
                    padding: 4em;
                    color: #E7EEFF;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .header-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.2;
                    align-content: center;
                }
                .typing-container {
                    display: inline-flex;
                    justify-content: center;
                    width: 100%;
                    overflow: hidden;
                }
                .header-text {
                    font-size: 4rem;
                    font-weight: 200;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 2px solid #E7EEFF;
                }
                .typing-text {
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    border-right: 2px solid;
                }
                .typing-text.typing {
                    width: 0;
                    animation: typing 2s steps(40, end) forwards, cursor-blink 0.5s step-end infinite;
                }
                .typing-text.backspacing {
                    width: 0;
                    animation: backspacing 1s steps(40, end) forwards, cursor-blink 0.5s step-end infinite;
                }
                .typing-text.typing-new-text {
                    width: 0;
                    animation: typing-new-text 2s steps(30, end) forwards, cursor-blink 0.5s step-end infinite;
                }
                .typing-text.done {
                    width: auto;
                    animation: none;
                }
                @keyframes typing {
                    from { width: 0; }
                    to { width: 1000px; }
                }
                @keyframes backspacing {
                    from { width: 1000px; }
                    to { width: 0; }
                }
                @keyframes cursor-blink {
                    from, to { border-color: transparent; }
                    50% { border-color: black; }
                }
                @keyframes typing-new-text {
                    from { width: 0; }
                    to { width: 100%; }
                }
                .curtain-effect {
                    position: relative;
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
                .no-wait-container {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    margin: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 1000;
                }
                .jumping-image {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 2rem;
                    animation: jump 1s infinite;
                }
                .no-wait-text {
                    color: #E7EEFF;
                    font-size: 2rem;
                }
                @keyframes jump {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-40px);
                    }
                }
                @media (max-width: 768px) {
                    .projects-page {
                        flex-direction: column;
                        height: auto;
                    }
                    .content-container, .list-project, .project-div {
                        width: 100%;
                        height: auto;
                    }
                    .vertical-line {
                        display: none;
                    }
                    .project {
                        flex-direction: column;
                    }
                    .project-image {
                        width: 100%;
                        margin: 10px 0;
                    }
                    .project-content {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Work;