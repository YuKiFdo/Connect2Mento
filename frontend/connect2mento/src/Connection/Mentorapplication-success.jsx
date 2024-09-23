import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.css";
import HeaderContent from "../Components/HeaderContent/HeaderContent";

const SuccessPage = () => {
  return (
    <div id="wrapper">
        <HeaderContent />
    <div className="success-container">
      <div className="success-message">
        <h1>Application Submitted Successfully!</h1>
        <p>Thank you for applying to become a mentor. We will review your application and get back to you soon.</p>
        <Link to="/" className="back-home-button">
          Go Back to Homepage
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SuccessPage;
