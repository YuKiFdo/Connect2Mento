import { FaHome, FaUser, FaCalendarAlt, FaComments, FaChartBar, FaCog, FaSyncAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'
import React from 'react';
import Boxcalender from '../Boxcalender/Boxcalender';


function Calcontent() {

  return (
    <div className='full-page'>

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

        <Boxcalender/>

    </div>

  )
}

export default Calcontent