// ProjectsPage.js
import React from 'react';
import { dataProjects, softwareProjects, otherProjects } from '../assets/projectData';

function ProjectsPage({ listProjectRef, activeProject, toggle, setToggle, projectDivRef }) {
    const projects = toggle === 'data' ? dataProjects : toggle === 'software' ? softwareProjects : otherProjects;
    // console.log("toggle", toggle);

    return (
        <>
            <div className="featured-title">Featured Projects</div>
            <div className="toggle-container">
                <button className={`toggle-btn ${toggle === 'data' ? 'active' : ''}`} onClick={() => setToggle('data')}>
                    <span className="button_top">Data</span>
                </button>
                <button className={`toggle-btn ${toggle === 'software' ? 'active' : ''}`} onClick={() => setToggle('software')}>
                    <span className="button_top">Software</span>
                </button>
                <button className={`toggle-btn ${toggle === 'others' ? 'active' : ''}`} onClick={() => setToggle('others')}>
                    <span className="button_top">Others</span>
                </button>
            </div>
            <div className="content-container">
                <div className="project-div" ref={projectDivRef}>
                    {projects.map((project, index) => (
                        <div key={index} className={`project ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                            <div className="project-content">
                                <span className="project-title">{project.title}</span>
                                <p className="project-description">{project.description}</p>
                                {project.skills && (
                                    <div className="skills-list">
                                        {project.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-item">{skill}</span>
                                        ))}
                                    </div>
                                )}
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="check-btn">Check it out</button>
                                </a>
                            </div>
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
    .projects-page {
        background-color: #FAF9F6;
        font-family: 'Josefin Sans', sans-serif;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .featured-title {
        font-size: 3rem;
        color: #E7EEFF;
        margin-top: 10rem;
        display: flex;
        justify-content: center;
        color: #010004;
        font-weight: 300;
        padding: 0 0 2rem 0;
    }

    .toggle-container {
        display: flex;
        margin: 10px 0 4.5rem 0;
        justify-content: center;
    }

    .toggle-btn {
        --button_radius: 0.75em;
        --button_color: #e8e8e8;
        --button_outline_color: #000000;
        font-size: 15px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        border: none;
        border-radius: var(--button_radius);
        background: var(--button_outline_color);
        padding: 0;
        margin: 0 5px;
        cursor: pointer;
    }

    .button_top {
        display: block;
        box-sizing: border-box;
        border: 2px solid var(--button_outline_color);
        border-radius: var(--button_radius);
        padding: 0.75em 1.5em;
        background: var(--button_color);
        color: var(--button_outline_color);
        transform: translateY(-0.2em);
        transition: transform 0.1s ease;
    }

    .toggle-btn:hover .button_top {
        transform: translateY(-0.33em);
    }

    .toggle-btn:active .button_top {
        transform: translateY(0);
    }

    .toggle-btn.active .button_top {
        background: var(--button_outline_color);
        color: var(--button_color);
    }

    .content-container {
        display: flex;
        flex: 1;
        justify-content: center;
    }

    .project-div {
        width: 80vw;
        height: 100%;
        position: relative;
        border-radius: 45px;
        padding: 20px;
        margin: 2rem auto;
        box-sizing: border-box;
    }

    .project {
        display: flex;
        align-items: flex-start;
        margin-bottom: 5rem;
        height: auto;
        justify-content: space-between;
    }

    .project.left-image {
        flex-direction: row;
    }

    .project.right-image {
        flex-direction: row-reverse;
    }

    .project-image {
        width: 27rem;
        height: 25rem;
        max-width: 100%;
        border-radius: 10px;
        margin: 0 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .project-title {
        font-size: 2.3rem;
        font-weight: 300;
        text-align: left;
    }

    .project-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
    }

    .project-description {
        margin-bottom: 1rem;
        font-size: 1.7rem;
        font-weight: 200;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }

    .skill-item {
        margin-right: 10px;
        padding: 5px 10px;
        background-color: #e7eeff;
        border-radius: 5px;
        font-size: 1rem;
        color: #333;
    }

    .check-btn {
        padding: 10px 20px;
        background-color: transparent;
        border: 2px solid #E7EEFF;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .check-btn:hover {
        background-color: #E7EEFF;
        color: #333;
    }

   @media (max-width: 768px) {
    .projects-page {
        flex-direction: column;
        height: auto;
    }

    .content-container,
    .list-project,
    .project-div {
        width: 100%;
        height: auto;
    }

    .project {
        flex-direction: column;
        margin-bottom: 3rem; /* Adjusted margin for mobile */
    }

    .project-image {
        display: none; /* Hide project image on mobile */
    }

    .project-content {
        width: 100%;
        height: 100%;
        padding: 0 1rem; /* Add padding to give some margin */
        border: 4mm ridge rgba(0, 0, 0, .9);
        border-radius: 25px;
        box-shadow: 7px 7px 9px 0px rgba(151 ,151, 151,1);
        background: #010004;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Ensures proper spacing between elements */
    }

    .project-title {
        width: 100%;
        padding: 1rem 0 0 0;
        font-size: 2rem; /* Slightly smaller font size for mobile */
        font-weight: 400;
        border-bottom: 2px solid #E7EEFF; /* Adding a 2px light blue bottom border */
        color: #E7EEFF;
        text-align: center; /* Center align title */
    }

    .project-description {
        font-size: 1.5rem; /* Adjusted font size for mobile */
        text-align: left; /* Left align description */
        color: #E7EEFF;
        margin-top: 1rem;
    }
    
    .check-btn {
        align-self: center; /* Center the button horizontally */
        margin-bottom: 1rem; /* Ensure some space at the bottom */
        color: #E7EEFF;
    }
    
    .toggle-container {
        display: flex;
        margin: 10px 0 0 0;
        justify-content: center;
    }
}

`}</style>


        </>
    );
}

export default ProjectsPage;
