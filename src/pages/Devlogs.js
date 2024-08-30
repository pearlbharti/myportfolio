import React, { useState } from 'react';
import devlogData from '../assets/devlogData.js';

const Devlog = () => {
    const [expandedLogId, setExpandedLogId] = useState(null); // Track which log is expanded

    const handleHelpMeClick = (logId) => {
        setExpandedLogId(logId === expandedLogId ? null : logId); // Toggle expansion on click
    };

    const handleCloseClick = () => {
        setExpandedLogId(null); // Close the expanded section
    };

    return (
        <div className="devlog-container">
            {Array.isArray(devlogData) ? (
                devlogData.map((log) => (
                    <div key={log.id} className="card">
                        <h2 className="card-title">{log.title}</h2>
                        <p className="card-status" style={{ color: log.done ? 'green' : 'red' }}>
                            <strong>Status:</strong> {log.status}
                        </p>
                        <p className="card-update"><strong>Update:</strong> {log.update}</p>
                        <p className="card-issues"><strong>Issues:</strong> {log.issues}</p>
                        <p className="card-deadline"><strong>Deadline:</strong> {log.deadline}</p>

                        {/* Conditionally render the "Help me" button */}
                        {!log.done && expandedLogId !== log.id && (
                            <button
                                onClick={() => handleHelpMeClick(log.id)}
                                className="read-more-button"
                            >
                                Help me
                            </button>
                        )}

                        {expandedLogId === log.id && (
                            <div className="expanded-section">
                                <div className="problem-statement">
                                    <h3>Problem Statement</h3>
                                    {Array.isArray(log.problemStatement) ? (
                                        <ul>
                                            {log.problemStatement.map((statement, index) => (
                                                <li key={index}>{statement}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{log.problemStatement}</p>
                                    )}
                                </div>
                                <div className="replit-embed">
                                    <iframe
                                        src="https://replit.com/@snehsuresh02/recipeextraction?embed=true"
                                        style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
                                        title="recipe-extraction"
                                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                                    ></iframe>

                                </div>
                                {/* Add a "Close" button */}
                                <button
                                    onClick={handleCloseClick}
                                    className="close-button"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>{devlogData}</p>
            )}
            <style jsx>{`
                .devlog-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    width: 100%;
                    min-height: 100vh;
                    align-items: center;
                    background-color: #010004;
                    color: #E7EEFF;
                    font-family: 'Josefin Sans', sans-serif;
                }

                .card {
                    position: relative;
                    background-color: rgba(255, 255, 255, 0);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    padding: 16px;
                    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
                    width: calc(100% - 32px);
                    max-width: 80%;
                    margin: 16px;
                    transition: max-height 0.5s ease-out;
                    overflow: hidden;
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

                .read-more-button,
                .close-button {
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
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                }

                .read-more-button:hover,
                .close-button:hover {
                    transform: translateY(-0.33em);
                }

                .expanded-section {
                    display: flex;
                    gap: 16px;
                    margin-top: 20px;
                    padding: 16px;
                    border-top: 1px solid rgba(255, 255, 255, 0.3);
                }

                .problem-statement {
                    flex: 1;
                }

                .replit-embed {
                    flex: 2;
                }

                .close-button {
                    bottom: 8px; /* Adjust positioning */
                    right: 16px;
                    top: auto;
                    left: auto;
                }
            `}</style>
        </div>
    );
};

export default Devlog;
