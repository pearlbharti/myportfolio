import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = ({ title, description, image, link, isActive, isWideScreen }) => {
  // Conditional styling for box-shadow and border
  const cardStyle = isWideScreen
    ? {}
    : {
      boxShadow: '0px 0px 4px 2px rgba(224,221,224,1)',
      WebkitBoxShadow: '0px 0px 4px 2px rgba(224,221,224,1)',
      MozBoxShadow: '0px 0px 4px 2px rgba(224,221,224,1)',
      border: 'none',
    };

  return (
    <div className={`work-card ${isActive ? 'active' : ''}`} style={cardStyle}>
      <div className="card-content-wrapper">
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className={`card-content ${isActive ? 'active' : ''}`}>
          <div className="card-text">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
          <div className="spacer"></div>
          <div className="card-buttons">
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">Check it out</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .work-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 20px;
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(20%) blur(3px);
        }

        .work-card:not(.active):hover .card-image {
          transform: scale(1.1);
          filter: brightness(100%) blur(0px);
        }

        .work-card.active .card-image {
          transform: scale(1);
          filter: blur(0px) brightness(100%);
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 4px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          opacity: 0.3; /* Default opacity for inactive cards */
        }

        .card-content.active {
          opacity: 1; /* Full opacity for active card */
        }

        .work-card:not(.active):hover .card-content {
          transform: translateY(0);
        }

        .work-card.active .card-content {
          transform: translateY(0);
        }

        .card-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          padding: 0px 20px 0px 20px;
        }

        .card-title {
          font-size: 1.4rem;
          margin: 3rem 0 3rem 0;
          text-transform: uppercase;
        }

        .card-description {
          font-size: 1.5rem;
          margin-top: 5px;
          font-weight: 300;
        }

        .spacer {
          flex: 1;
        }

        .card-buttons {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          padding: 0 0 4rem 0px;
        }

        .card-button {
          --button_radius: 0.5em;
          --button_color: #000000;
          --button_outline_color: #ffffff;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          border: 1px solid var(--button_outline_color);
          border-radius: var(--button_radius);
          background: transparent;
          padding: 4px 8px;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s, color 0.3s;
        }

        .card-button:hover {
          transform: translateY(-0.2em);
          background-color: rgba(231, 238, 255, 0.1);
          text-decoration: none;
        }

        .card-button:active {
          transform: translateY(0);
        }

        @media screen and (min-width: 769px) {
          .pin-lines.left,
          .pin-lines.right {
            display: none;
          }
        }

        @media screen and (max-width: 768px) {
          .pin-lines.left {
            left: -20px;
            z-index: 2;
          }

          .card-content {
            transform: translateY(0%);
          }

          .pin-lines.right {
            right: -20px;
            z-index: 2;
          }
        }
      `}</style>

      <div className="pin-lines left">
        {[...Array(40)].map((_, index) => (
          <div key={index} className="pin-line"></div>
        ))}
      </div>
      <div className="pin-lines right">
        {[...Array(40)].map((_, index) => (
          <div key={index} className="pin-line"></div>
        ))}
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isWideScreen: PropTypes.bool,
};

WorkCard.defaultProps = {
  isActive: false,
  isWideScreen: true,
};

export default WorkCard;
