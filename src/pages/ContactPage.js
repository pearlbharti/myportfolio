import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { githubIcon, linkedInIcon } from '../assets/images';
import GlareButton1 from '../components/GlareButton1';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID)
            .then((response) => {
                setFeedbackMessage('Your message has been sent successfully.');
                console.log("Mail Sent");
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            })
            .catch((error) => {
                setFeedbackMessage('Sorry, there seems to be an issue. Please email me at snehsuresh02@gmail.com.');
                console.error('EmailJS error:', error);
            });
    };

    return (
        <div className="page-container">
            <div className="icon-container">
                <a href="https://github.com/snehsuresh" target="_blank" rel="noopener noreferrer">
                    <div className="github-icon" dangerouslySetInnerHTML={{ __html: githubIcon }}></div>
                </a>
                <a href="https://www.linkedin.com/in/snehpillai/" target="_blank" rel="noopener noreferrer">
                    <div className="linkedin-icon" dangerouslySetInnerHTML={{ __html: linkedInIcon }}></div>
                </a>
            </div>
            <div className="contact-form-container">
                <span className="title">LET'S COLLABORATE!</span>
                <p className="subtitle">
                    Excited to work together or looking to hire me? Send me a message through the form, and don't forget to check out my resume <a href="https://d14xe37va4uv2q.cloudfront.net/portfolio_assets/documents/Pillai_Resume_2024_folio.pdf" target="_blank" rel="noopener noreferrer" className="link">here</a>!
                </p>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID*"
                        className="input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message*"
                        className="textarea"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <GlareButton1 type="submit">
                        <div className="button-msg">Send Message</div>
                    </GlareButton1>
                </form>
                {feedbackMessage && (
                    <p className="feedback-message">{feedbackMessage}</p>
                )}
            </div>
            <style jsx>{`
                .button-msg {
                }
                .page-container {
                    font-family: 'Josefin Sans', sans-serif;
                    height: 90vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #010004;
                    position: relative;
                    margin-top: 2rem;
                }
                .contact-form-container {
                    background-color: transparent;
                    padding: 30px;
                    border-radius: 8px;
                    border: 1px solid #ffffff;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                }
                .title {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    color: #E7EEFF;
                    font-weight: 300;
                }
                .subtitle {
                    font-size: 1.3rem;
                    margin-bottom: 30px;
                    color: #dddddd;
                    font-weight: 300;
                    opacity: 0.8;
                }
                .link {
                    color: #007BFF;
                    text-decoration: none;
                }
                .form {
                    display: flex;
                    flex-direction: column;
                }
                .input, .textarea {
                    padding: 10px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    border: 1px solid #ffffff;
                    font-size: 1rem;
                    background-color: transparent;
                    color: #ffffff;
                }
                .textarea {
                    height: 100px;
                    resize: none;
                }
                .feedback-message {
                    margin-top: 15px;
                    font-size: 1rem;
                    color: green;
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
                @media (max-width: 768px) {
                    .contact-form-container {
                        border: none;
                        box-shadow: none;
                        width: 100%;
                        text-align: left;

                    }
                        .page-container{
                        padding: 2rem;
                        }
                    .icon-container {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default ContactPage;
