import React from 'react'
import './MentorContent.css'


const MentorContent = () => {
    const mentors = [
      {
        name: 'Sithumi Premechandra',
        title: 'Lead Front-end Developer',
        skills: ['React', 'TypeScript', 'Web Development'],
        image: '../../../Images/pexels-mikhail-nilov-8871860.png',
      },
      {
        name: 'Sumudu Ranasinghe',
        title: 'QA Engineer',
        skills: ['Web Development', 'JavaScript', 'Software Engineering'],
        image: '../../../Images/Premium Photo _ Happy cheerful business woman posing isolated over grey wall sitting at the table using laptop.jpeg',
      },
      {
        name: 'Pathum Jayasundara',
        title: 'Family Lawyer',
        skills: ['Divorce', 'Adoption', 'Alimony', 'Custody'],
        image: '../../../Images/pexels-itay-verchik-1150587-16773284.jpg',
      },
      {
        name: 'Saduni Nimesha',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: '../../../Images/pexels-ron-lach-10341096.jpg',
      },
      {
        name: 'Thilini Kumari',
        title: 'Front-end Developer',
        skills: ['React', 'Java Script', 'Web Development'],
        image: '../../../Images/pexels-olly-3768116.jpg',
      },
      {
        name: 'Nadil Ekanayake',
        title: 'UX Engineer',
        skills: ['Product Design', 'UI/UX Design', 'User Interface Design'],
        image: '../../../Images/pexels-mikhail-nilov-7582781.jpg',
      },
      {
        name: 'Dewmi Dinangi',
        title: 'Back End Developer',
        skills: ['C++', 'Python', 'Java', 'PHP', 'Oracle', 'MySQL'],
        image: '../../../Images/pexels-mikhail-nilov-8872811.jpg',
      },
      {
        name: 'Thisumi Shinaya',
        title: 'Full Stack Developr',
        skills: ['Python', 'React', 'Java', 'Oracle', 'MySQL'],
        image: '../../../Images/Jovem linda mulher de negócios trabalhando no computador em um café _ Foto Grátis.jpeg',
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