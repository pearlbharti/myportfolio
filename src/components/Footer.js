import React from 'react';

function Footer() {
    const newLocal = `
        .footer {
            font-family: 'Josefin Sans', sans-serif;
            padding: 8rem 0rem 0rem 0rem;
            background-color: #010004;
            color: #333;
        }
        .footer::before {
            content: '';
            display: block;
            width: 60%; /* 60% of the screen width */
            margin: 0 auto; /* Center it */
            border-top: 1px solid rgba(221, 221, 221, 0.5); /* Reduced opacity */
            position: relative;
            top: -1rem; /* Adjust position to overlap with the original border */
        }
        .content {
            text-align: left; /* Align content to the left */
            padding: 0 0 0rem 2rem;
        }
        .footer-text {
            color: #E7EEFF;
            margin-bottom: 15px;
            font-weight: 300;
        }
        .content p {
            margin: 0 0 10px;
            font-size: 1.3rem;
        }
        a {
            text-decoration: none;
        }
        a:hover {
            text-decoration: none;
        }
        .no-color {
            color: #a1a6b2; /* Removes the color, inherits the text color */
        }
        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            text-align: left; /* Align footer-bottom to the left */
        }
        .left {
            font-size: 14px;
        }
        .right {
            display: flex;
            align-items: center;
        }
        .right a {
            margin-right: 15px;
            font-size: 14px;
        }
        .copyright {
            color: #8a8e99;
        }

        /* Media query for small screens */
        @media (max-width: 768px) {
            .footer {
                padding: 2rem 2rem 0rem;
            }
            .content {
                text-align: left;
            }
            .footer-text {
                font-size: 1rem;
                margin-bottom: 10px;
            }
            .footer-bottom {
                flex-direction: column-reverse; /* Place right on top of left */
                align-items: flex-start;
                text-align: left;
            }
            .right {
                margin-top: 10px;
            }
            .right a {
                margin-right: 15px;
            }
            .right, .left {
                font-size: 12px;
            }
        }
    `;
    return (
        <div className="footer">
            <div className="content">
                <p className="footer-text">
                    I'm always open for collaboration and discussions, Let's get in touch!
                </p>
                <p>
                    <a href="mailto:snehpillai02@gmail.com" className="no-color">snehpillai02@gmail.com</a> / <a href="mailto:spillai@umassd.edu" className="no-color">spillai@umassd.edu</a>
                </p>
            </div>
            <div className="footer-bottom">
                <div className="left">
                    <p className="copyright">&copy; Sneh Pillai, Built using ReactJs</p>
                </div>
                <div className="right">
                    <a href="https://github.com/snehsuresh" target="_blank" rel="noopener noreferrer" className="no-color">Github</a>
                    <a href="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/documents/Pillai_Resume_2024_folio.pdf" target="_blank" rel="noopener noreferrer" className="no-color">Resume</a>
                    <a href="https://www.linkedin.com/in/snehpillai/" target="_blank" rel="noopener noreferrer" className="no-color">LinkedIn</a>
                </div>
            </div>
            <style jsx>{newLocal}</style>
        </div>
    );
}

export default Footer;
