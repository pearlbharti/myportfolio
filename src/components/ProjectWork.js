import React, { useEffect, useRef } from 'react';

const ProjectWork = ({ projects, activeProject, setActiveProject, contentcontainerRef, listProjectRef, toggle }) => {
    const projectDivRef = useRef(null);

    //setting active project as you scroll

    return (
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
            <div className="project-div" ref={projectDivRef}>
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
    );
};

export default ProjectWork;
