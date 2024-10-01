import React, { useState } from 'react';
import './MentorEdit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';


const MentorEdit = () => {  
return (


    <div className='page'>
      <div id="nav-bar">
            <a href="/new">
            <img  className='logo' src='./images/iconc2m.png' alt="Connect2Mento" />
            </a>
            <p class="dashboard-title">My Profile</p>
              

              <div id="second-bar">
                <a href="/sign-out" className="out-btn">Sign Out</a>
              </div>

      </div>



      <div className="sidebar-tent">
              <a href="/home" className="menu-link">
              <FontAwesomeIcon icon={faHome} />
                <span className="menu-text"> Home</span>
              </a>

              <a href="/profile" className="menu-link">
              <FontAwesomeIcon icon={faUser} />
                <span className="menu-text">Profile</span>
              </a>

              <a href="/calendar" className="menu-link">
              <FontAwesomeIcon icon={faCalendar} />
                <span className="menu-text">Calendar</span>
              </a>

              <a href="/chat" className="menu-link">
              <FontAwesomeIcon icon={faComments} />
                <span className="menu-text">Chat</span>
              </a>

              <a href="/mentee" className="menu-link">
              <FontAwesomeIcon icon={faRepeat} />
                <span className="menu-text">To Mentee</span>
              </a>
          </div>


<div className="update-mentor-container">
        <div className="form-header">
          <h2>Update Profile</h2>
        </div>

        <div className="mentor-form">
          <div className="mentor-form-description">
            <p>
            Take a moment to update your profile and let us get to know you better! 
            A few quick updates will help us connect you with the right opportunities and mentees.
            </p>
          </div>

          <div className="main-con"></div>
          <form className="mentor-apply-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>FaceBook URL</label>
                <input
                  type="facebookURL"
                  name="name"
                  placeholder="FaceBook URL"
                />
              </div>
              <div className="form-group">
                <label>Instergram URL</label>
                <input
                  type="text"
                  name="instergramURL"
                  placeholder="Instergram URL"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Linkedin URL</label>
                <input
                  type="text"
                  name="linkedinURL"
                  placeholder="Linkedin URL"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>



            <div className="form-group">
                <label>Motivations</label>
                <textarea
                  name="motivations"
                  placeholder="Tell us about your motivations"
                />
              </div>

                <div className="form-group">
                    <label>Challenges</label>
                    <textarea
                    name="Challenges"
                    placeholder="Tell us about your challenges"
                    />
                </div>

                    <div className="form-group">
                        <label>Background</label>
                        <textarea
                        name="background"
                        placeholder="Tell us about your background"
                        />
                    </div>

                    <div className="form-group">
                        <label>Goals</label>
                        <textarea
                        name="goals"
                        placeholder="Tell us about your goals"
                        />
                    </div>    

                    <div className='Save-btn'>
                        <button class='save'>Save</button>
                    </div> 
            </form>
            </div>
            </div>
    </div>
  );
};

export default MentorEdit;
