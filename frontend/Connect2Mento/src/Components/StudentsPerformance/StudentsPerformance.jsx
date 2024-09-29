import React from 'react';
import './StudentsPerformance.css';

function StudentsPerformance() {
  const students = [
    { name: 'Vinay Patil', role: 'UI/UX Designer', score: '97%' },
    { name: 'Amey Wag', role: 'Front End Development', score: '92%' },
    { name: 'Vikrant Shetty', role: 'Front End Development', score: '88%' },
    { name: 'Prem Jayale', role: 'Front End Development', score: '84%' },
    { name: 'Shubham Roa', role: 'Front End Development', score: '80%' },
  ];

  return (
    <div className="students-performance">
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
  );
}

export default StudentsPerformance;
