import React from 'react';
import PropTypes from 'prop-types';

const WorkCard = ({ title, description, image, isActive }) => {
  return (
    <div className={`work-card ${isActive ? 'active' : ''}`}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="spacer"></div>
        <div className="card-buttons">
          <a href="#" className="card-button">Github Repo</a>
          <a href="#" className="card-button">Try Me</a>
        </div>
      </div>

      <style jsx>{`
        .work-card {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(50%) blur(3px);
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
          transform: translateY(110%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
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
          justify-content: center; /* Center vertically within the card-content */
          align-items: center; /* Center horizontally */
          flex: 1; /* Take up remaining space above the buttons */
          padding: 0px 20px 0px 20px;
        }

        .card-title {
          font-size: 1.2rem; /* Adjusted size */
          margin: 0;
          text-transform: uppercase;
        }

        .card-description {
          font-size: 1rem;
          margin-top: 5px;
        }

        .spacer {
          flex: 1; /* Take up remaining space between text and buttons */
        }

        .card-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          width: 100%;
          padding: 0 10px; /* Add padding for better spacing */
        }

        .card-button {
          background-color: transparent;
          color: white;
          border: 2px solid white;
          text-decoration: none;
          padding: 6px 12px; /* Smaller size */
          border-radius: 20px; /* Rounder */
          font-size: 0.8rem; /* Adjusted size */
          text-align: center;
          flex: 1;
          margin: 0 5px;
          display: block;
          transition: background-color 0.3s, color 0.3s;
        }

        .card-button:hover {
          background-color: #E7EEFF;
        }
      `}</style>
    </div>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

WorkCard.defaultProps = {
  isActive: false,
};

export default WorkCard;
