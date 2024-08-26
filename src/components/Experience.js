import React, { useEffect, useState } from 'react';
import { storyData } from '../assets/story';

const Experience = () => {
    const [progressHeight, setProgressHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const experienceContainer = document.querySelector('.experience-container');
            const checkpoints = document.querySelectorAll('.progress-checkpoint');
            const years = document.querySelectorAll('.checkpoint-year');
            const experienceTop = experienceContainer.getBoundingClientRect().top + window.scrollY;
            const experienceHeight = experienceContainer.clientHeight;
            const scrollTop = window.scrollY;
            const viewportMiddle = window.innerHeight / 2;

            if (scrollTop + viewportMiddle >= experienceTop && scrollTop + viewportMiddle <= experienceTop + experienceHeight) {
                let scrolledPercentage = ((scrollTop + viewportMiddle - experienceTop) / experienceHeight) * 100;
                if (scrolledPercentage >= 82) {
                    scrolledPercentage = 82;
                }
                setProgressHeight(scrolledPercentage);

                checkpoints.forEach((checkpoint, index) => {
                    const checkpointPosition = parseFloat(checkpoint.getAttribute('data-position'));
                    const isActive = scrolledPercentage >= checkpointPosition;
                    const imageWrapper = document.querySelector(`.experience-item:nth-child(${index + 1}) .experience-image-wrapper`);

                    if (isActive) {
                        checkpoint.classList.add('active');
                        if (imageWrapper) {
                            imageWrapper.classList.add('active');
                        }
                    } else {
                        checkpoint.classList.remove('active');
                        if (imageWrapper) {
                            imageWrapper.classList.remove('active');
                        }
                    }
                });

                years.forEach((year) => {
                    const yearPosition = parseFloat(year.parentElement.getAttribute('data-position'));
                    const isActive = scrolledPercentage >= yearPosition;

                    if (isActive) {
                        year.classList.add('active');
                    } else {
                        year.classList.remove('active');
                    }
                });
            } else if (scrollTop + viewportMiddle < experienceTop) {
                setProgressHeight(0);
                checkpoints.forEach((checkpoint) => checkpoint.classList.remove('active'));
                years.forEach((year) => year.classList.remove('active'));
                document.querySelectorAll('.experience-image-wrapper').forEach(wrapper => wrapper.classList.remove('active'));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!Array.isArray(storyData)) {
        return <p>Error: Story data is not available.</p>;
    }

    const years = [2019, 2021, 2022, 2023];
    const checkpoints = [27, 45, 63, 82]

    return (
        <div className="experience-container">
            <div className="progress-bar">
                <div className="progress-bar-inner">
                    <div className="progress-filled" style={{ height: `${progressHeight}%` }}></div>
                    <div className="progress-checkpoint" data-position="8">
                        <span className="checkpoint-year">2015</span>
                    </div>
                    {years.map((year, index) => (
                        <div className="progress-checkpoint" key={index} data-position={checkpoints[index]} >
                            <span className="checkpoint-year">{year}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience-details">
                <div className="journey">
                    <div className="journey-title">My journey</div>
                </div>
                {storyData.map((item, index) => (
                    <div className="experience-item" key={index}>
                        <div className="experience-content">
                            <div className="experience-text">
                                <span className='exp-title'>{item.title}</span>
                                <span className='exp-subtitle'>{item.company}</span>
                                {item.location && <p className='exp-location'>{item.location}</p>}
                                {item.date && <p className='exp-date'><strong>{item.date}</strong></p>}
                                {item.description && <p className='exp-description'>{item.description}</p>}
                            </div>
                            {item.image && (
                                <div className="experience-image-wrapper">
                                    <img className="experience-image" src={item.image} alt={item.title} />
                                    <div className="experience-image-border"></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
    .experience-container {
        display: flex;
        position: relative;
        font-family: 'Josefin Sans', sans-serif;
    }
         .journey-title {
                font-size: 4rem;
                font-weight: 200;
                text-align: center;
                margin: 3rem 0 4rem 0;
                color: white;
            }

    .progress-bar {
        width: 10%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        margin: 0;
    }

    .progress-bar-inner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        background-color: #010004;
        border-radius: 3px;
    }

    .progress-filled {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #E7EEFF;
        transition: height 0.3s ease;
    }

    .progress-checkpoint {
        width: 14px;
        height: 14px;
        border: 2px solid transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10%;
        z-index: 1;
        transition: background-color 0.3s ease, border-color 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progress-checkpoint.active {
        border-color: #E7EEFF;
        background-color: #E7EEFF;
    }

    .progress-checkpoint .checkpoint-year {
        position: absolute;
        left: 20px; /* Adjust to move the year to the right of the checkpoint */
        font-size: 0.75em;
        color: #010004;
        background-color: #010004;
        padding: 2px 4px;
        border-radius: 4px;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    .progress-checkpoint:nth-child(2) {
        top: 8.5%;
    }

    .progress-checkpoint:nth-child(3) {
        top: 27%;
    }

    .progress-checkpoint:nth-child(4) {
        top: 45%;
    }

    .progress-checkpoint:nth-child(5) {
        top: 63%;
    }

    .progress-checkpoint:nth-child(6) {
        top: 82%;
    }

    .checkpoint-year.active {
        color: #010004;
        background-color: #E7EEFF;
    }

    .experience-details {
        width: 90%;
        margin-left: 10%;
        padding: 20px;
        color: #E7EEFF;
    }

    .experience-item {
    margin: 0rem 0 5rem 0; /* Adjust margins to avoid overlap */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
}

    .experience-content {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: auto; /* Allow height to adjust based on content */
    max-width: 100%; /* Ensure it does not stretch beyond container */
}

    .experience-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    
.experience-image-wrapper {
    position: relative;
    width: 30%;
    padding-top: 30%; /* Maintain a square aspect ratio */
    margin-left: 20px; /* Ensure space between items */
    overflow: hidden;
    box-shadow: 0px 4px 8px 0px #8a8e99;
    border-radius: 10px;
    margin-right: 3rem;
}

    .experience-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}

    .experience-image-wrapper.active .experience-image-border {
        transform: translate(0, 0) scale(1.05);
    }

    .exp-title {
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 5px;
        color: #E7EEFF;
    }

    .exp-subtitle {
        display: block;
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 5px;
        color: #8a8e99;
    }

    .exp-description {
        font-size: 1.3rem;
        line-height: 1.5;
        color: #b8becc;
            margin: 0 6rem 0 0;
    }

    .exp-company {
        font-size: 1.25em;
        font-weight: bold;
        color: #E7EEFF;
    }

    .exp-location, .exp-date {
        margin: 5px 0;
        color: #E7EEFF;
    }

    .exp-date strong {
        color: #E7EEFF;
    }

    .exp-list {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 0;
    }

    .exp-list li {
        margin-bottom: 5px;
        color: #E7EEFF;
    }

    h3, h4, ul {
        color: #E7EEFF;
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
    }

    @media (max-width: 768px) {
    .experience-item {
        flex-direction: column; /* Stack items vertically on smaller screens */
    }

    .experience-image-wrapper {
        width: 100%; /* Make images full-width on smaller screens */
        margin-left: 0; /* Remove left margin */
        margin-bottom: 20px; /* Add bottom margin for spacing */
        
    }
}
`}</style>
        </div>
    );
};

export default Experience;
