import React from 'react'
import './MentorContent.css'
import secimage1 from '../../../Images/pexels-mikhail-nilov-8871860.png'


const MentorContent = () => {
    const mentors = [
      {
        name: 'Saman Premechandra',
        title: 'Lead Front-end Developer',
        skills: ['React', 'TypeScript', 'Web Development'],
        image: {secimage1},
      },
      {
        name: 'Saman Premechandra',
        title: 'QA Engineer',
        skills: ['Web Development', 'JavaScript', 'Software Engineering'],
        image: 'path/to/image2.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'Family Lawyer',
        skills: ['Divorce', 'Adoption', 'Alimony', 'Custody'],
        image: 'path/to/image3.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: 'path/to/image4.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: 'path/to/image4.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: 'path/to/image4.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: 'path/to/image4.jpg',
      },
      {
        name: 'Saman Premechandra',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: 'path/to/image4.jpg',
      },
    ];

  return (

    <div className="mentor-list">
      <h2>Our Mentors</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search mentors..." />
        <button className="btn-search">Search</button>
        <button className="btn-view">View Mentors</button>
      </div>
      <div className="mentors">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <p>{mentor.title}</p>
            <div className="skills">
              {mentor.skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="btn-find">Find my Mentor</button>
    </div>
  )
}

export default MentorContent