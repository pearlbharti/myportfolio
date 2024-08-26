// Devlog.js
import React from 'react';
import devlogData from '../assets/devlogData.js';

const Devlog = () => {
    console.log('devlogData:', devlogData); // Log the data

    return (
        <div className="devlog-container">
            {Array.isArray(devlogData) ? (
                devlogData.map((log) => (
                    <div key={log.id} className="card">
                        <h2 className="card-title">{log.title}</h2>
                        <p
                            className="card-status"
                            style={{ color: log.done ? 'green' : 'red' }}
                        >
                            <strong>Status:</strong> {log.status}
                        </p>
                        <p className="card-update"><strong>Update:</strong> {log.update}</p>
                        <p className="card-issues"><strong>Issues:</strong> {log.issues}</p>
                        <p className="card-deadline"><strong>Deadline:</strong> {log.deadline}</p>
                        <a href="#" className="read-more-button">Help me</a>
                    </div>
                ))
            ) : (
                <p>{devlogData}</p>
            )}
            <style jsx>{`
    .devlog-container {
        display: flex;
        flex-direction: column;
        gap: 16px; /* Space between cards */
        width: 100%;
        height: 100vh;
        align-items: center; /* Center cards horizontally */
        // justify-content: center; /* Center cards vertically */
        background-color: #010004; /* Background color for the container */
        color: #E7EEFF; /* Text color */
        font-family: 'Josefin Sans', sans-serif; /* Font family */
    }

    .card {
        position: relative; /* Needed for absolute positioning of the button */
        background-color: rgba(255, 255, 255, 0); /* Transparent background */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Slightly visible border */
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5); /* White box shadow */
        width: calc(100% - 32px); /* Full width with padding adjustment */
        max-width: 80%; /* Optional: Set a max-width to prevent very wide cards */
        margin: 16px; /* Add margin around the card */
    }

    .card-title {
        margin: 0;
        font-size: 1.5em;
    }

    .card-status,
    .card-update,
    .card-issues,
    .card-deadline {
        margin: 8px 0;
    }

    .card-status strong,
    .card-update strong,
    .card-issues strong,
    .card-deadline strong {
        font-weight: bold;
    }

    .read-more-button {
        /* Smaller button with white outline, white background, and 'Josefin Sans' font */
        --button_radius: 0.5em;
        --button_color: #000000;
        --button_outline_color: #ffffff;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 14px;
        font-weight: bold;
        border: 2px solid var(--button_outline_color);
        border-radius: var(--button_radius);
        background: transparent;
        padding: 0.5em 1.25em;
        color: #E7EEFF;
        transform: translateY(-0.2em);
        transition: transform 0.1s ease;
        cursor: pointer;
        position: absolute; /* Absolute positioning to align to the bottom-right */
        bottom: 16px; /* Adjust bottom position */
        right: 16px; /* Adjust right position */
    }

    .read-more-button:hover {
        /* Pull the button upwards when hovered */
        transform: translateY(-0.33em);
    }
`}</style>
        </div>
    );
};

export default Devlog;
