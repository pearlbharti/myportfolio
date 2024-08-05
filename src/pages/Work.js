import React, { useState, useEffect, useRef } from 'react';

// Example project data
const projects = Array.from({ length: 15 }, (_, index) => ({
    title: `Project ${index + 1}`,
    description: `Description for Project ${index + 1}`,
    image: `/img/project${index + 1}.jpg` // Update image paths as needed
}));

function Work() {
    const [activeProject, setActiveProject] = useState(0);
    const projectDivRef = useRef(null);
    const listProjectRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = projectDivRef.current.scrollTop;
            const projectElements = document.querySelectorAll('.project');
            const viewportHeight = window.innerHeight;
            let currentIndex = 0;

            projectElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
                    currentIndex = index;
                }
            });

            setActiveProject(currentIndex);
        };

        const projectDivElement = projectDivRef.current;
        projectDivElement.addEventListener('scroll', handleScroll);

        return () => {
            projectDivElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const listProjectElement = listProjectRef.current;
        if (listProjectElement) {
            const itemElements = listProjectElement.querySelectorAll('.list-project-item');
            if (itemElements.length > 0) {
                const itemHeight = itemElements[0].clientHeight || 50; // Assume 50 if height is not available
                const listHeight = listProjectElement.clientHeight;

                // Calculate the scroll position
                const activeItem = itemElements[activeProject];
                if (activeItem) {
                    const itemOffsetTop = activeItem.offsetTop;
                    const itemHeight = activeItem.clientHeight;
                    const containerHeight = listProjectElement.clientHeight;

                    // Center the active item in the container
                    const scrollTop = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);

                    // Scroll to the calculated position
                    listProjectElement.scrollTo({
                        top: Math.max(scrollTop, 0), // Prevent negative scroll
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [activeProject]);

    return (
        <div className="projects-page">
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
            <div className="project-div" ref={projectDivRef}>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .projects-page {
                    display: flex;
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                }

                .list-project {
                    width: 30%;
                    height: 100vh;
                    background-color: #f4f4f4;
                    position: relative;
                    overflow-y: auto; /* Enable vertical scrolling */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                }

                .list-project-item {
                    padding: 10px;
                    text-align: center;
                    font-size: 14px; /* Smaller font size for all items */
                    transition: transform 0.3s ease, font-size 0.3s ease;
                    width: 100%; /* Make items take full width */
                    flex-shrink: 0; /* Prevent items from shrinking */
                }

                .list-project-item.active {
                    font-size: 24px; /* Larger font size for the active item */
                    transform: scale(1.2);
                    font-weight: bold;
                }

                .project-div {
                    height: 100vh;
                    width: 70%;
                    overflow-y: scroll; /* Enable scrolling for the project section */
                    position: relative; /* Ensure position context for child elements */
                }

                .project {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .project-image {
                    width: 80%;
                    height: auto;
                    border-radius: 10px;
                    margin-bottom: 20px;
                }

                @media (max-width: 768px) {
                    .projects-page {
                        flex-direction: column;
                        height: auto;
                    }

                    .list-project, .project-div {
                        width: 100%;
                        height: auto;
                    }
                }
            `}</style>
        </div>
    );
}

export default Work;
