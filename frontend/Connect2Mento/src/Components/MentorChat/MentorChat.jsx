import React, { useState } from 'react';
import './MentorChat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

// Dummy data for mentees and their messages
const mentees = [
  { id: 1, name: 'John Doe', messages: ['Hi Mentor!', 'Can you help me with React?'] },
  { id: 2, name: 'Jane Smith', messages: ['I am struggling with Java.', 'Do you have any advice?'] },
  { id: 3, name: 'Alex Johnson', messages: ['What are the best resources to learn Python?'] },
];

const MentorChat = () => {
  const [selectedMentee, setSelectedMentee] = useState(mentees[0]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle sending new messages
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const updatedMentee = {
        ...selectedMentee,
        messages: [...selectedMentee.messages, newMessage],
      };

      // Update the mentees array with the new message for the selected mentee
      const updatedMentees = mentees.map((mentee) =>
        mentee.id === updatedMentee.id ? updatedMentee : mentee
      );

      setSelectedMentee(updatedMentee);
      setNewMessage(''); // Clear input field
    }
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

          




 



    <div className="chat-container">
      <div className="notification-bar">
        <h3>Mentees</h3>
        <ul>
          {mentees.map((mentee) => (
            <li
              key={mentee.id}
              className={mentee.id === selectedMentee.id ? 'active' : ''}
              onClick={() => setSelectedMentee(mentee)}
            >
              {mentee.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-section">
        <div className="chat-header">
          <h2>Chat with {selectedMentee.name}</h2>
        </div>

        <div className="chat-body">
          {selectedMentee.messages.map((message, index) => (
            <div key={index} className="message mentee-message">
              {message}
            </div>
          ))}
        </div>

        <div className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default MentorChat;
