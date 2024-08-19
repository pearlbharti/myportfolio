import React, { useState, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import { confidenceInterval, jumpingArrow } from '../assets/images';

// Example project data for three categories
const dataProjects = Array.from({ length: 15 }, (_, index) => ({
    title: `Data Project ${index + 1}`,
    description: `Description for Data Project ${index + 1}`,
    image: `/img/data-project${index + 1}.jpg`
}));

const softwareProjects = Array.from({ length: 15 }, (_, index) => ({
    title: `Software Project ${index + 1}`,
    description: `Description for Software Project ${index + 1}`,
    image: `/img/software-project${index + 1}.jpg`
}));

const otherProjects = Array.from({ length: 15 }, (_, index) => ({
    title: `Other Project ${index + 1}`,
    description: `Description for Other Project ${index + 1}`,
    image: `/img/other-project${index + 1}.jpg`
}));

function Work() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeProject, setActiveProject] = useState(0);
    const [toggle, setToggle] = useState('data');
    const [showImage, setShowImage] = useState(false);

    const contentcontainerRef = useRef(null);
    const listProjectRef = useRef(null);

    const [text, setText] = useState("");
    const [displayedText, setDisplayedText] = useState("I offer no proof, only confidence.");
    const [animationState, setAnimationState] = useState('typing');

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

    const projects = toggle === 'data' ? dataProjects : toggle === 'software' ? softwareProjects : otherProjects;

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

    useEffect(() => {
        const handleScroll = () => {
            if (!contentcontainerRef.current) return;

            const scrollTop = contentcontainerRef.current.scrollTop;
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

        const projectDivElement = contentcontainerRef.current;
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {

        const timer = setTimeout(() => {
            if (contentcontainerRef.current) {
                console.log('Scrolling to top');
                contentcontainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 3500);

        return () => clearTimeout(timer);

    }, [showImage]);

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
                <div className="toggle-container">
                    <button className={`toggle-btn ${toggle === 'data' ? 'active' : ''}`} onClick={() => setToggle('data')}>
                        Data
                    </button>
                    <button className={`toggle-btn ${toggle === 'software' ? 'active' : ''}`} onClick={() => setToggle('software')}>
                        Software
                    </button>
                    <button className={`toggle-btn ${toggle === 'others' ? 'active' : ''}`} onClick={() => setToggle('others')}>
                        Others
                    </button>
                </div>
                <div className="content-container" ref={contentcontainerRef}>
                    <div className="list-project" ref={listProjectRef}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`list-project-item ${activeProject === index ? 'active' : ''}`}
                            >
                                {project.title}
                            </div>
                        ))}
                    </div>
                    <div className="vertical-line"></div>
                    <div className="project-div">
                        {projects.map((project, index) => (
                            <div key={index} className={`project ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                                <div className="project-content">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showImage && !hasScrolled && (
                <div className="no-wait-container">
                    <div className="jumping-image" dangerouslySetInnerHTML={{ __html: jumpingArrow }}>
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
        display: inline-flex; /* Ensures centering within flex container */
        justify-content: center; /* Centers text horizontally */
        width: 100%; /* Full width of the header */
        overflow: hidden; /* Ensures overflow is clipped */
    }

    .header-text {
        font-size: 4rem;
        font-weight: 200;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid #E7EEFF; /* Cursor effect */
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
                width: auto; /* Ensures the text is fully visible */
                animation: none; /* Disables any ongoing animations */
            }

            .typing-text.done {
                width: auto; /* Ensures the text is fully visible */
                animation: none; /* Disables any ongoing animations */
            }

            @keyframes typing {
                from { width: 0; }
                to { width: 1000px; /* Adjust this to the length of the longer text */ }
                }

            @keyframes backspacing {
                from { width: 1000px; /* Width of longer text */ }
                to { width: 0px; /* Width of shorter text */ }
                }

                @keyframes cursor-blink {
                from, to { border-color: transparent; }
                50% { border-color: black; }
                }
                @keyframes typing-new-text {
                from { width: 0; }
                to { width: 100%; } /* Width of the new text "No, Wait!" */
                }

                @keyframes cursor-blink {
                    from, to { border-color: transparent; }
                    50% { border-color: black; }
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
                .toggle-container {
                    display: flex;
                    margin: 10px 0;
                    padding: 4rem 0 0 3rem;
                }
                .toggle-btn {
                    padding: 10px 20px;
                    font-size: 16px;
                    margin: 0 5px;
                    cursor: pointer;
                    background-color: #f4f4f4;
                    border: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }
                .toggle-btn.active {
                    background-color: #ccc;
                }
                .content-container {
                    display: flex;
                    flex: 1;
                    height: 100vh;
                }
                .list-project {
                    width: 30%;
                    position: relative;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }
                .list-project-item {
                    padding: 1rem;
                    text-align: center;
                    font-size: 14px;
                    transition: transform 0.3s ease, font-size 0.3s ease;
                    width: 100%;
                    flex-shrink: 0;
                    color: #E7EEFF;
                    opacity: 0.5;
                }
                .list-project-item.active {
                    font-size: 24px;
                    transform: scale(1.2);
                    font-weight: bold;
                    opacity: 1;
                }
                .vertical-line {
                    width: 1px;
                    background-color: #E7EEFF;
                    height: 50vh;
                    align-self: center;
                }
                .project-div {
                    height: 80vh;
                    width: 70%;
                    overflow-y: scroll;
                    position: relative;
                    border-radius: 45px;
                    padding: 20px;
                    margin: 2rem;
                    box-sizing: border-box;
                }
                .project {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .project.left-image {
                    flex-direction: row;
                }
                .project.right-image {
                    flex-direction: row-reverse;
                }
                .project-image {
                    width: 50%;
                    height: auto;
                    border-radius: 10px;
                    margin: 0 20px;
                }
                .project-content {
                    width: 50%;
                    color: #E7EEFF;
                    height: 20rem;
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
                    margin-bottom: 2rem; /* Increased margin to prevent overlap with text */
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
                        transform: translateY(-40px); /* Increased jump height */
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
