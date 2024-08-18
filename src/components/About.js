import React from 'react';

function About() {
    return (
        <div className="page-container">
            <div className="about-container">
                <img src="/path/to/your/image.jpg" alt="Profile" className="profile-image" />
                <div className="text-container">
                    <p className="lorem-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="button-container">
                        <a href="/path/to/resume.pdf" className="resume-button">Download Resume</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh;
          background-color: #f5f5f5;
          padding: 20px;
        }

        .about-container {
          display: flex;
          align-items: flex-start;
          width: 80%;
          max-width: 1200px;
          padding: 40px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .profile-image {
          flex: 0 0 40%;
          max-width: 100%;
          border-radius: 10px;
        }

        .text-container {
          flex: 0 0 60%;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .lorem-text {
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .resume-button {
          display: inline-block;
          padding: 12px 24px;
          color: #fff;
          background-color: #0070f3;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          text-align: center;
        }

        .resume-button:hover {
          background-color: #005bb5;
        }
      `}</style>
        </div>
    );
}

export default About;
