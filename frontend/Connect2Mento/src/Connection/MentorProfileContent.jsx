import React, { useState } from 'react';
import './MentorProfileContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';



const MentorProfileContent = () => {
  const students = [
    { name: 'Saman Kumara', role: 'UI/UX Designer', score: '97%' },
    { name: 'Ravindu Rajapaksha', role: 'Front End Development', score: '92%' },
    { name: 'Shehal Herath', role: 'Front End Development', score: '88%' },
    { name: 'Nimesh Shaminda', role: 'UI/UX Designer', score: '97%' },
    { name: 'Sandeepa Wishvajith', role: 'Front End Development', score: '84%' },
    { name: 'Isuru Liyanage', role: 'Front End Development', score: '80%' },
    { name: 'Chamath Sandaru', role: 'Front End Development', score: '84%' },
    { name: 'Chathumini', role: 'Front End Development', score: '84%' },
  ];

  const meetings = [
    'October 11 : "Meeting with sumudu - Discussed career goals.""',
    'October 11 : "Resource shared with kavindu- How to prepare for exams."',
    'October 12 : "Progress update from sithum - Completed 2 out of 3 ."',
    'October 13 : "Meeting with malithi - Discussed career goals.""',
    'October 13 : "Resource shared kanishka - How to prepare for exams."',
    'October 14 : "Progress update from sumudu - Completed 2 out of 3 ."',
    'October 15 : "Meeting with lavan - Discussed career goals.""',
    'October 15 : "Resource shared with kalana - How to prepare for exams."',
    'October 16 : "Progress update from ravindu - Completed 2 out of 3 ."'
  ];



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


        <div className="sidebar">
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

          
          <div className="dashboard-container">
              <div className="dashboard-header">
                <h1>Mentor Dashboard</h1>
              </div>

              <div className="dashboard-cards">
                {/* Active Mentees Card */}
                <div className="sub-card">
                  <h3>Active Mentees</h3>
                  <p>5 Mentees</p>
                </div>

                {/* Upcoming Meetings Card */}
                <div className="sub-card">
                  <h3>Upcoming Meetings</h3>
                  <p>3 Meetings Scheduled</p>
                </div>

                {/* Unread Messages Card */}
                <div className="sub-card">
                  <h3>Unread Messages</h3>
                  <p>4 Unread Messages</p>
                </div>

                {/* New Notifications Card */}
                <div className="sub-card">
                  <h3>New Notifications</h3>
                  <p>2 New Notifications</p>
                </div>
              </div>

      <div className="main-content">

      <div className="performance">
          <h3>Students Performance</h3>
          <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span className="student-name">{student.name}</span>
            <span className="student-role">{student.role}</span>
            <span className="student-score">{student.score}</span>
          </li>
        ))}
      </ul>
      </div>
        
      <div className="performance">
        <div className="meetings">
          <h3>Scheduled Meetings</h3>
          <ul>
            {meetings.map((meeting, index) => (
              <li key={index}>{meeting}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
    

  ) 

  
};

export default MentorProfileContent;
