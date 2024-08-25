import React, { useEffect, useState } from 'react';
import { storyData } from '../assets/story';

const Experience = () => {
    const [progressHeight, setProgressHeight] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            const experienceContainer = document.querySelector('.experience-container');
            const checkpoints = document.querySelectorAll('.progress-checkpoint');
            const experienceTop = experienceContainer.getBoundingClientRect().top + window.scrollY;
            const experienceHeight = experienceContainer.clientHeight;
            const scrollTop = window.scrollY;
            const viewportMiddle = window.innerHeight / 2;

            if (scrollTop + viewportMiddle >= experienceTop && scrollTop + viewportMiddle <= experienceTop + experienceHeight) {
                let scrolledPercentage = ((scrollTop + viewportMiddle - experienceTop) / experienceHeight) * 100;
                if (scrolledPercentage >= 82) {
                    scrolledPercentage = 82
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
            } else if (scrollTop + viewportMiddle < experienceTop) {
                setProgressHeight(0);
                checkpoints.forEach((checkpoint) => checkpoint.classList.remove('active'));
                document.querySelectorAll('.experience-image-wrapper').forEach(wrapper => wrapper.classList.remove('active'));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!Array.isArray(storyData)) {
        return <p>Error: Story data is not available.</p>;
    }

    return (
        <div className="experience-container">
            <div className="progress-bar">
                <div className="progress-bar-inner">
                    <div className="progress-filled" style={{ height: `${progressHeight}%` }}></div>
                    <div className="progress-checkpoint" data-position="5"></div>
                    <div className="progress-checkpoint" data-position="20"></div>
                    <div className="progress-checkpoint" data-position="40"></div>
                    <div className="progress-checkpoint" data-position="60"></div>
                    <div className="progress-checkpoint" data-position="80"></div>
                    <div className="progress-checkpoint" data-position="100"></div>
                </div>
            </div>
            <div className="experience-details">
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
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

    .experience-container {
        display: flex;
        position: relative;
        font-family: 'Josefin Sans', sans-serif; /* Apply Josefin Sans font */
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
    }

    .progress-checkpoint.active {
        border-color: #E7EEFF;
        background-color: #E7EEFF;
    }

    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }

    

    .progress-checkpoint.active.blink {
        animation: blink 1s infinite;
    }

    .progress-checkpoint:nth-child(2) {
        top: 1%;
    }

    .progress-checkpoint:nth-child(3) {
        top: 22%;
    }

    .progress-checkpoint:nth-child(4) {
        top: 42%;
    }

    .progress-checkpoint:nth-child(5) {
        top: 62%;
    }


    .progress-checkpoint:nth-child(6) {
        top: 82%;
    }

    .experience-details {
        width: 90%;
        margin-left: 10%;
        padding: 20px;
        color: #E7EEFF; /* Apply text color */
    }

    .experience-item {
        margin: 0rem 1rem 5rem 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        height: 20rem;
    }

    .experience-content {
        display: flex;
        align-items: flex-start;
        width: 100%;
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
    /* Set a fixed width for the container */
    padding-top: 30%; /* Maintain the aspect ratio of 1:1 */
    margin-left: 20px;
    overflow: hidden; /* Ensure overflow is hidden for the square aspect ratio */
        box-shadow: 0px 4px 8px 0px #8a8e99;
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


    // .experience-image-border {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     border: 5px solid #E7EEFF;
    //     transform: translate(15px, 15px); /* Offset initially */
    //     transition: transform 0.3s ease; /* Smooth transition */
    //     box-sizing: border-box; /* Ensures border is included in the box dimensions */
    //     z-index: 1; /* Ensure border is behind the image */
    // }

    .experience-image-wrapper.active .experience-image-border {
    transform: translate(0, 0) scale(1.05); /* Move to fit around the image */
}

    .exp-title {
        display: block;
        font-size: 1.5em; /* Slightly smaller */
        font-weight: bold;
        margin-bottom: 5px;
        color: #E7EEFF; /* Apply text color */
    }
        .exp-subtitle {
        display: block;
        font-size: 1.1em; /* Slightly smaller */
        font-weight: bold;
        margin-bottom: 5px;
        color: #8a8e99; /* Apply text color */
    }

    .exp-description{
    font-size: 18px;
    line-height: 1.5;
    }

    .exp-company {
        font-size: 1.25em; /* Larger than title */
        font-weight: bold;
        color: #E7EEFF; /* Apply text color */
    }

    .exp-location, .exp-date {
        margin: 5px 0;
        color: #E7EEFF; /* Apply text color */
    }

    .exp-date strong {
        color: #E7EEFF; /* Apply text color */
    }

    .exp-list {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 0;
    }

    .exp-list li {
        margin-bottom: 5px;
        color: #E7EEFF; /* Apply text color */
    }

    h3, h4, ul {
        color: #E7EEFF; /* Apply text color */
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
    }
`}</style>

        </div>
    );
};

export default Experience;
