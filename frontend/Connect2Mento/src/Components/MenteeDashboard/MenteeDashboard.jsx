import React from 'react'
import './MenteeDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

function MenteeDashboard() {
  // const students = [
  //   { name: 'Saman Kumara', role: 'UI/UX Designer', score: '97%' },
  //   { name: 'Ravindu Rajapaksha', role: 'Front End Development', score: '92%' },
  //   { name: 'Shehal Herath', role: 'Front End Development', score: '88%' },
  //   { name: 'Nimesh Shaminda', role: 'UI/UX Designer', score: '97%' },
  //   { name: 'Sandeepa Wishvajith', role: 'Front End Development', score: '84%' },
  //   { name: 'Isuru Liyanage', role: 'Front End Development', score: '80%' },
  //   { name: 'Chamath Sandaru', role: 'Front End Development', score: '84%' },
  //   { name: 'Chathumini', role: 'Front End Development', score: '84%' },
  // ];

  // const meetings = [
  //   'October 11 : "Meeting with sumudu - Discussed career goals.""',
  //   'October 11 : "Resource shared with kavindu- How to prepare for exams."',
  //   'October 12 : "Progress update from sithum - Completed 2 out of 3 ."',
  //   'October 13 : "Meeting with malithi - Discussed career goals.""',
  //   'October 13 : "Resource shared kanishka - How to prepare for exams."',
  //   'October 14 : "Progress update from sumudu - Completed 2 out of 3 ."',
  //   'October 15 : "Meeting with lavan - Discussed career goals.""',
  //   'October 15 : "Resource shared with kalana - How to prepare for exams."',
  //   'October 16 : "Progress update from ravindu - Completed 2 out of 3 ."'
  // ];



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

<div className="mentee-dashboard">
      <div className="dashboard-content">
        <h2>Mentee Dashboard</h2>
        
        <div className="cards">
          <div className="card">
            <h3>Active Mentors</h3>
            <p>2 Mentors Assigned</p>
          </div>
          <div className="card">
            <h3>Upcoming Sessions</h3>
            <p>3 Sessions Scheduled</p>
          </div>
          <div className="card">
            <h3>Unread Messages</h3>
            <p>5 Unread Messages</p>
          </div>
          <div className="card">
            <h3>New Notifications</h3>
            <p>1 New Notification</p>
          </div>
        </div>

        <div className="mentee-progress">
          <h3>Your Progress</h3>
          <ul>
            <li>Goal 1: Learn UI/UX Design - 70% Complete</li>
            <li>Goal 2: Improve Front End Development Skills - 50% Complete</li>
            <li>Goal 3: Build Portfolio Website - 30% Complete</li>
          </ul>
        </div>

        <div className="scheduled-sessions">
          <h3>Scheduled Sessions</h3>
          <ul>
            <li>October 11: Session with Mentor 1 - Discussed career goals</li>
            <li>October 12: Feedback from Mentor 2 - Project progress review</li>
            <li>October 13: Session with Mentor 1 - Finalized design strategy</li>
          </ul>
        </div>
      </div>
    </div>




  </div>
  )
}

export default MenteeDashboard