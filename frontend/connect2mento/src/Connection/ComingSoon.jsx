import React from "react";
import { Link } from "react-router-dom";
import "./ComingSoon.css";
import HeaderContent from "../Components/HeaderContent/HeaderContent";

const ComingSoon = () => {
  return (
    <div id="wrapper">
      <HeaderContent />
      <div className="comingsoon-container">
        <div className="comingsoon-message">
            <h1>Coming Soon!</h1>
          <p>Check back soon for updates.</p>
          <Link to="/" className="back-home-button">
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
