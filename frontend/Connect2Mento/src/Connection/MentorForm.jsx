import "./MentorForm.css";
import React, { useState, useEffect } from "react";
import HeaderContent from "../Components/HeaderContent/HeaderContent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MentorForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    gender: "",
    location: "",
    expertiseArea: "",
    linkedinUrl: "",
    bio: "",
    introvideo: "",
    whyMentor: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.jobTitle.trim()) {
      errors.jobTitle = "Job title is required.";
    }
    if (!formData.gender) {
      errors.gender = "Gender selection is required.";
    }
    if (!formData.location) {
      errors.location = "Location selection is required.";
    }
    if (!formData.expertiseArea) {
      errors.expertiseArea = "Expertise area is required.";
    }
    if (!formData.linkedinUrl.trim()) {
      errors.linkedinUrl = "LinkedIn URL is required.";
    } else if (!/^(http|https):\/\/[^ "]+$/.test(formData.linkedinUrl)) {
      errors.linkedinUrl = "LinkedIn URL is invalid.";
    }
    if (!formData.bio.trim()) {
      errors.bio = "Bio is required.";
    }
    if (!formData.whyMentor.trim()) {
      errors.whyMentor = "Reason for becoming a mentor is required.";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors); 


    if (Object.keys(errors).length === 0) {
      try {
        setIsSubmitting(true);
        const response = await axios.post(
          "http://localhost:8080/applications/add",
          formData
        );
        navigate("/Mentorapplication-success");
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form contains errors:", errors);
    }
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryNames = response.data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b)); 
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
  
    fetchCountries();
  }, []);

  return (
    <div id="wrapper">
      <HeaderContent />

      <div className="apply-mentor-container">
        <div className="form-header">
          <h2>Apply as a Mentor</h2>
        </div>

        <div className="mentor-form">
          <div className="mentor-form-description">
            <p>
              Lovely to see you! Filling out the form only takes a couple of
              minutes. We'd love to learn more about your background and the
              ins-and-outs of why you’d like to become a mentor.
            </p>
          </div>

          <div className="step active">About you</div>
          <form className="mentor-apply-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                />
                {formErrors.name && (
                  <p className="error-text">{formErrors.name}</p>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                {formErrors.email && (
                  <p className="error-text">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job title"
                />
                {formErrors.jobTitle && (
                  <p className="error-text">{formErrors.jobTitle}</p>
                )}
              </div>
              <div className="form-group">
                <label>Company (optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {formErrors.gender && (
                  <p className="error-text">{formErrors.gender}</p>
                )}
              </div>

              <div className="form-group">
                <label>Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="">Select your location</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {formErrors.location && (
                  <p className="error-text">{formErrors.location}</p>
                )}
              </div>
            </div>

            <div className="step active">Profile</div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="expertiseArea"
                value={formData.expertiseArea}
                onChange={handleInputChange}
              >
                <option value="">Select your category</option>
                <option value="eng">Engineering & Data</option>
                <option value="ux">UX & Design</option>
                <option value="bm">Business Management</option>
                <option value="pm">Product Marketing</option>
              </select>
              {formErrors.expertiseArea && (
                <p className="error-text">{formErrors.expertiseArea}</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>LinkedIn URL</label>
                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="LinkedIn URL"
                />
                {formErrors.linkedinUrl && (
                  <p className="error-text">{formErrors.linkedinUrl}</p>
                )}
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself"
                />
                {formErrors.bio && (
                  <p className="error-text">{formErrors.bio}</p>
                )}
              </div>
            </div>

            <div className="step active">Experiance</div>
            <div className="form-row">
              <div className="form-group">
                <label>Intro Video Link (optional)</label>
                <input
                  type="text"
                  name="introvideo"
                  value={formData.introvideo}
                  onChange={handleInputChange}
                  placeholder="Intro video link"
                />
              </div>
              <div className="form-group">
                <label>Why do you want to become a mentor?</label>
                <textarea
                  name="whyMentor"
                  value={formData.whyMentor}
                  onChange={handleInputChange}
                  placeholder="Why do you want to become a mentor?"
                />
                {formErrors.whyMentor && (
                  <p className="error-text">{formErrors.whyMentor}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="next-step-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorForm;
