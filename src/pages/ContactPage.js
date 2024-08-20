import React from 'react';
import { githubIcon, mediumIcon, linkedInIcon } from '../assets/images';

function ContactPage() {
    return (
        <div className="page-container">
            <div className="icon-container">
                <a href="">
                    <div className="github-icon" dangerouslySetInnerHTML={{ __html: githubIcon }}></div>
                </a>
                <a href="">
                    <div className="medium-icon" dangerouslySetInnerHTML={{ __html: mediumIcon }}></div>
                </a>
                <a href="">
                    <div className="linkedin-icon" dangerouslySetInnerHTML={{ __html: linkedInIcon }}></div>
                </a>
            </div>
            <div className="contact-form-container">
                <span className="title">Let's Collaborate</span>
                <p className="subtitle">
                    Excited to work together or looking to hire me? Send me a message through the form, and don't forget to check out my resume <a href="/resume.pdf" className="link">here</a>!
                </p>
                <form className="form">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input"
                    />
                    <input
                        type="email"
                        placeholder="Email ID"
                        className="input"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="textarea"
                    />
                    <button type="submit" className="button">Send Message</button>
                </form>
            </div>
            <style jsx>{`
                .page-container {
                    font-family: 'Josefin Sans', sans-serif;
                    height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #010004;
                    position: relative;
                }
                .contact-form-container {
                    background-color: #141414;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                }
                .title {
                    font-size: 2rem;
                    margin-bottom: 20px;
                    color: #E7EEFF;
                    font-weight: 400;
                }
                .subtitle {
                    font-size: 1.25rem;
                    margin-bottom: 30px;
                    color: #dddddd;
                }
                .link {
                    color: #007BFF;
                    text-decoration: none;
                }
                .form {
                    display: flex;
                    flex-direction: column;
                }
                .input {
                    padding: 10px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    font-size: 1rem;
                    background-color: #1c1c1c;
                    color: #ffffff;
                }
                .textarea {
                    padding: 10px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    font-size: 1rem;
                    height: 100px;
                    resize: none;
                    background-color: #1c1c1c;
                    color: #ffffff;
                }
                .button {
                    padding: 10px;
                    border-radius: 5px;
                    border: none;
                    background-color: #007BFF;
                    color: #fff;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .icon-container {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding-right: 10px;
                }
                .icon {
                    width: 24px;
                    height: 24px;
                    fill: #ffffff;
                    cursor: pointer;
                    transition: fill 0.2s ease-in-out;
                }
                .icon:hover {
                    fill: #007BFF;
                }
            `}</style>
        </div>
    );
}

export default ContactPage;
