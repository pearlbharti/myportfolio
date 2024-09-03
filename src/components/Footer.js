import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap');
                
                footer {
                    background-color: #010004;
                    color: #E7EEFF;
                    padding: 6rem 2rem 0 2rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    font-weight:300;
                    font-size: 1.2rem;
                    font-family: 'Josefin Sans', sans-serif;
                }

                footer::before {
                    content: '';
                    display: block;
                    width: 80%;
                    height: 2px;
                    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(221,221,221,1) 50%, rgba(255,255,255,0) 100%);
                    margin: 0 auto;
                    animation: pulse 4s infinite;
                    opacity: 0.8;
                }

                @keyframes pulse {
                    0% { width: 0; }
                    50% { width: 80%; }
                    100% { width: 0; }
                }

                .footer-content {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .contact-info {
                    margin-bottom: 1.5rem;
                }

                .social-media {
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                }

                .footer-bottom {
                    font-size: 0.9rem;
                    color: #8a8e99;
                }

                .link {
                    color: #E7EEFF;
                    text-decoration: none;
                    transition: color 0.3s ease, transform 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .link:hover {
                    color: #ffffff;
                    text-shadow: 0 0 10px rgba(231, 238, 255, 1);
                    transform: translateY(-5px);
                }

                .resume-link:hover::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: rgba(231, 238, 255, 0.1);
                    border-radius: 8px;
                    transform: scale(1.1);
                    transition: transform 0.3s ease;
                }
            `}</style>
            <div className="footer-content">
                <p className="contact-info">
                    I'm always open for collaboration and discussions, Let's get in touch!
                </p>
                <div className="contact-info">
                    <p>Email: <tab></tab> 
                        <a href="mailto:snehpillai02@gmail.com" className="link"> snehpillai02@gmail.com</a> / 
                        <a href="mailto:spillai@umassd.edu" className="link"> spillai@umassd.edu</a>
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/snehpillai/" target="_blank" rel="noopener noreferrer" className="link">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/snehsuresh" target="_blank" rel="noopener noreferrer" className="link">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/documents/Pillai_Resume_2024_folio.pdf" target="_blank" rel="noopener noreferrer" className="link resume-link">
                        <FaFilePdf /> Resume
                    </a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Sneh Pillai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
