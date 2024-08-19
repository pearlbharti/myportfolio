import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="content">
                <p className='footer-text'>
                    If you're looking to start a new project or need fresh ideas, I'd love to connect and see how my skills can help. I'm always open for collaboration and discussions, Let's get in touch!
                </p>
                <p>
                    <a href="mailto:snehpillai02@gmail.com">snehpillai02@gmail.com</a> / <a href="mailto:spillai@umassd.edu">spillai@umassd.edu</a>
                </p>
                <p>
                    <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">Learn more about me here</a>
                </p>
            </div>
            <div className="footer-bottom">
                <div className="left">
                    <p>&copy; Sneh Pillai, Built using ReactJs</p>
                </div>
                <div className="right">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://medium.com/@your-medium" target="_blank" rel="noopener noreferrer">Medium</a>
                </div>
            </div>
            <style jsx>{`
                .footer {

                    font-family: 'Josefin Sans', sans-serif;
                    text-align: center;
                    padding: 0 2rem;
                    background-color: #010004;
                    color: #333;
                    border-top: 1px solid #ddd;
                    height: 20vh;
                }
                    .footer-text{
                    color:#E7EEFF}
                .content p {
                    margin: 0 0 10px;
                    font-size: 1.3rem;
                }
                a {
                    color: #0070f3;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                }
                .left {
                    font-size: 14px;
                }
                .right a {
                    margin-left: 15px;
                    font-size: 14px;
                }
            `}</style>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
            `}</style>
        </div>
    )
}

export default Footer
