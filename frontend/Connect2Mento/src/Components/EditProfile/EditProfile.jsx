import React, { useState } from 'react';
import './EditProfile.css';
import { FaHome, FaUser, FaCalendarAlt, FaComments, FaChartBar, FaCog, FaSyncAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    age: '',
    occupation: '',
    experience: '',
    motivations: '',
    challenges: '',
    goals: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Profile updated:', profile);
  };

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

            <button className='mobile-menu-icon'>
              <FaBars/>
            </button>
      </div>


        <div className="sidebar">
              <a href="/home" className="menu-link">
                <FaHome className="menu-icon" />
                <span className="menu-text">Home</span>
              </a>

              <a href="/profile" className="menu-link">
                <FaUser className="menu-icon" />
                <span className="menu-text">Profile</span>
              </a>

              <a href="/calendar" className="menu-link">
                <FaCalendarAlt className="menu-icon" />
                <span className="menu-text">Calendar</span>
              </a>

              <a href="/chat" className="menu-link">
                <FaComments className="menu-icon" />
                <span className="menu-text">Chat</span>
              </a>

              <a href="/insights" className="menu-link">
                <FaChartBar className="menu-icon" />
                <span className="menu-text">Insights</span>
              </a>

              <a href="/settings" className="menu-link">
                <FaCog className="menu-icon" />
                <span className="menu-text">Settings</span>
              </a>

              <a href="/mentee" className="menu-link">
                <FaSyncAlt className="menu-icon" />
                <span className="menu-text">To Mentee</span>
              </a>
          </div>


          <h3 class='update-title'>Update Profile</h3>

    <form className="edit-profile" onSubmit={handleSubmit}>
      <div className="profile-section">
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder='Enter your name' />
      </div>
      <div className="profile-section">
        <label>Title:</label>
        <input type="text" name="title" value={profile.title} onChange={handleChange} placeholder='Enter title'/>
      </div>
      <div className="profile-section">
        <label>Age:</label>
        <input type="number" name="age" value={profile.age} onChange={handleChange} placeholder='Enter your age'/>
      </div>
      <div className="profile-section">
        <label>Occupation:</label>
        <input type="text" name="occupation" value={profile.occupation} onChange={handleChange} placeholder='Enter your occupation' />
      </div>
      <div className="profile-section">
        <label>Experience:</label>
        <input type="text" name="experience" value={profile.experience} onChange={handleChange} placeholder='Enter your experience' />
      </div>
      <div className="profile-section-motivation">
        <label>Motivations:</label>
        <textarea name="motivations" value={profile.motivations} onChange={handleChange} ></textarea>
      </div>
      <div className="profile-section-challange">
        <label>Challenges:</label>
        <textarea name="challenges" value={profile.challenges} onChange={handleChange}></textarea>
      </div>
      <div className="profile-section-goal">
        <label>Goals:</label>
        <textarea name="goals" value={profile.goals} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Save</button>
    </form>

    </div>
  );
};

export default EditProfile;
