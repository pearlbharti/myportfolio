import React from 'react';

function MoreWork() {
    return (
        <div className="more-work-container">
            <div className="more-work-button">More Work</div>

            <style jsx>{`
                .more-work-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    bottom: 20px; /* Adjust to place it near the bottom */
                    width: 100%;
                }

                .more-work-button {
                    border-radius: 15px;
                    background-color: rgba(0, 0, 0, 1);
                    box-shadow: 0px 4px 4px rgba(30, 30, 30, 0.8);
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                    padding: 15px 30px; /* Adjust padding to fit text */
                    font: 400 20px 'Josefin Sans', -apple-system, Roboto, Helvetica, sans-serif;
                    display: inline-block; /* Adjust width to fit text */
                    white-space: nowrap; /* Prevent text from wrapping */
                    margin: 0 auto; /* Centering */
                    cursor: pointer; /* Show pointer cursor on hover */
                }

                .more-work-button:hover {
                    background-color: rgba(50, 50, 50, 1); /* Slightly change color on hover */
                }
            `}</style>
        </div>
    );
}

export default MoreWork;