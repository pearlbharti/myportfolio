// ProjectsPage.js
import React, { useRef, useEffect, useState } from 'react';
import { dataProjects, softwareProjects, otherProjects } from '../assets/projectData';
import GlareButton1 from './GlareButton1';
function ProjectsPage({ listProjectRef, activeProject, toggle, setToggle, projectDivRef }) {
    const projects = toggle === 'data' ? dataProjects : toggle === 'software' ? softwareProjects : otherProjects;
    console.log("toggle", toggle)
    return (
        <>
            <div className="featured-title">Featured Projects</div>
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
            <div className="content-container" >
                {/* <div className="list-project" ref={listProjectRef}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`list-project-item ${activeProject === index ? 'active' : ''}`}
                        >
                            {project.title}
                        </div>
                    ))}
                </div>
                <div className="vertical-line"></div> */}
                <div className="project-div" ref={projectDivRef}>
                    {projects.map((project, index) => (
                        <div key={index} className={`project ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                            <div className="project-content">
                                <span className='project-title'>{project.title}</span>
                                <p className='project-description'>{project.description}</p>

                                <button className="check-btn">
                                    Check it out</button>
                            </div>
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
    .projects-page {
        font-family: 'Josefin Sans', sans-serif;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .featured-title {
        font-size: 2.5rem;
        color: #E7EEFF;
        margin-top: 10rem;
        display:flex;
        justify-content: center;
        color: #010004;
        font-weight: 200;
    }

    .toggle-container {
        display: flex;
        margin: 10px 0;
        justify-content: center;
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
        justify-content: center; /* Centers the project-div horizontally */
    }
    .list-project {
        width: 20%;
        position: relative;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }
    .list-project-item {
        padding: 0.5rem;
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
        width: 80vw; /* Ensures the width is 80% of the viewport width */
        height: 100%;
        position: relative;
        border-radius: 45px;
        padding: 20px;
        margin: 2rem auto; /* Centers the div horizontally */
        box-sizing: border-box;
    }
    .project {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        height: 30rem;
        justify-content: space-between;
    }
    .project.left-image {
        flex-direction: row;
    }
    .project.right-image {
        flex-direction: row-reverse;
    }
    .project-image {
        // height: 100%; /* Ensures the image takes up the full height of the .project class */
        // width: auto; /* Maintains the aspect ratio */
        width: 27rem;
         height: 25rem;
        max-width: 100%; /* Prevents the image from exceeding the container's width */
        border-radius: 10px;
        margin: 0 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds a shadow */
    }

    .project-title {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .project-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .check-btn {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: transparent;
        // color: #E7EEFF;
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
            height: auto;
            max-width: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds a shadow */
        }
        .project-content {
            width: 100%;
        }
    }
`}</style>


        </>
    );
}

export default ProjectsPage;


// 