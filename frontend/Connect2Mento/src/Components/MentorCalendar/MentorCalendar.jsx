import React, { useState } from 'react';
import './MentorCalendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

const MentorCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  // Get the current month, year, and number of days in the month
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = daysInMonth(year, month);

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const addEvent = (event) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setEvents({
      ...events,
      [dateKey]: [...(events[dateKey] || []), event],
    });
  };

  const renderDays = () => {
    const daysArray = [];
    for (let i = 1; i <= days; i++) {
      const dateKey = new Date(year, month, i).toISOString().split('T')[0];
      daysArray.push(
        <div
          key={i}
          className="calendar-day"
          onClick={() => handleDateClick(i)}
        >
          <span>{i}</span>
          {events[dateKey] && events[dateKey].map((event, index) => (
            <div key={index} className="event">
              {event}
            </div>
          ))}
        </div>
      );
    }
    return daysArray;
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

          






    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>Previous</button>
        <h2>{monthNames[month]} {year}</h2>
        <button onClick={goToNextMonth}>Next</button>
      </div>

      <div className="calendar-grid">
        {renderDays()}
      </div>

      {selectedDate && (
        <div className="event-form">
          <h3>Add Event for {selectedDate.toDateString()}</h3>
          <input
            type="text"
            placeholder="Enter event"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                addEvent(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      )}
    </div>


    </div>
  );
};

export default MentorCalendar;
