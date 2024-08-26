import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import './Button.css';


const Button = ({ children, onClick, link, type = '' }) => {
    const isInternal = link && link.startsWith('/');


    if (type === "submit") {
        return (
            <button type="submit" className="cta-button" onClick={onClick}>
                {children}
            </button>
        );
    }

    if (isInternal) {
        return (
            <Link to={link} className="cta-button" onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <a href={link} className="cta-button" onClick={() => { console.log("clicked") }} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default Button;

