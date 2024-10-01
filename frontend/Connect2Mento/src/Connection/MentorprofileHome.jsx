import React from 'react';
import '../Connection/MentorprofileHome.css';
import facebook from '../../Images/v237_167.png'
import mentor1 from '../../Images/pexels-mikhail-nilov-8871860.png'
import instegram from '../../Images/v237_169.png'
import linkedin from '../../Images/v237_168.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';


const MentorProfileHome = () => {
  return(
  <div className='full-page'>

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

             <div className="profile-card">
               <div className="profile-left">
                 <img 
                  src={mentor1}
                  alt="Dr. Sarah Collins" 
                  className="profile-image" 
                />
                <h2>Dr. Sarah Collins</h2>
                <p className="mentor-title">Mentor</p>

                <div className="profile-info">
                  <h3>About</h3>
                  <p><strong>AGE </strong>- 45</p>
                  <p><strong>Occupation </strong>- Professor</p>
                  <p><strong>Experience </strong>- 20 years</p>
                </div>

                
                <img 
                  src={facebook}
                  alt="facebook" 
                  className="facebook-image" 
                />
                <img 
                  src={instegram}
                  alt="instegram" 
                  className="instegram-image" 
                />
                <img 
                  src={linkedin}
                  alt="linkedin" 
                  className="linkedin-image" 
                />
                
                
              </div>

              <div className="profile-right">
                <div className="profile-section">
                  <h3>Motivations</h3>
                  <ul>
                    <li>Sees mentoring as a critical part of her role in academia.</li>
                    <li>Enjoys seeing her students succeed and grow academically and professionally.</li>
                  </ul>
                </div>

                <div className="profile-section">
                  <h3>Challenges</h3>
                  <ul>
                    <li>Limited time due to her busy teaching and research schedule.</li>
                    <li>Keeping track of multiple mentees and their individual progress.</li>
                    <li>Ensuring effective communication with students who may have different schedules and time zones.</li>
                  </ul>
                </div>

                <div className="profile-section">
                  <h3>Background</h3>
                  <p>Dr. Collins is a tenured professor at a prestigious university. She has been mentoring undergraduate and graduate students for the last decade. She is passionate about guiding students through their academic journey and helping them navigate career choices.</p>
                </div>

                <div className="profile-section">
                  <h3>Goals</h3>
                  <ul>
                    <li>Manage multiple mentees efficiently.</li>
                    <li>Track each mentee's progress to provide personalized advice.</li>
                    <li>Schedule regular meetings without conflicts.</li>
                    <li>Share academic papers, books, and other resources easily.</li>
                  </ul>
                </div>

                <div className="profile-section">
                  <h3>Technical Skills</h3>
                  <div className="skills">
                    <ul>
                      <li>Internet</li>                
                      <li>Social Networks</li>               
                      <li>Laptop</li>
                    </ul>                         
                  </div>
              </div>
          </div>
      </div>
  </div>
    

  ) 


};

export default MentorProfileHome;
