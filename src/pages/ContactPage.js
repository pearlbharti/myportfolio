import React from 'react';

function ContactPage() {
    return (
        <div className="page-container">
            <div className="contact-form-container">
                <h1 className="title">Let's Collaborate</h1>
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
                    height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f4f4f4;
                }
                .contact-form-container {
                    background-color: #fff;
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
                }
                .subtitle {
                    font-size: 1rem;
                    margin-bottom: 30px;
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
                }
                .textarea {
                    padding: 10px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    font-size: 1rem;
                    height: 100px;
                    resize: none;
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
            `}</style>
        </div>
    );
}

export default ContactPage;
