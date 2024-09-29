import React from 'react';
import './MentorProfileContent.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import StudentsPerformance from '../Components/StudentsPerformance/StudentsPerformance';
import Calender from '../Components/Calender/Calender';
import Notes from '../Components/Notes/Notes';
import Meetings from '../Components/Meetings/Meetings';
import { FaHome, FaUser, FaCalendarAlt, FaComments, FaChartBar, FaCog, FaSyncAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'



const MentorProfileContent = ({ title, value }) => {
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


    <div className="app">
      <div className="main-content">

        <div className="dashboard">
          <div className="dashboard-cards">
            <DashboardCard title="Active Mentees" value="70" />
            <DashboardCard title="Upcoming Meetings" value="04" />
            <DashboardCard title="Unread Messages" value="02" />
            <DashboardCard title="New Notifications" value="07" />
          </div>
          <div className="performance-sections">
          </div>
          <div className="bottom-sections">
            <Calender/>
            <Notes/>
            <Meetings/>
          </div>

          <StudentsPerformance/>
        </div>
      </div>
    </div>





  </div>
    

    

  );
};

export default MentorProfileContent;
