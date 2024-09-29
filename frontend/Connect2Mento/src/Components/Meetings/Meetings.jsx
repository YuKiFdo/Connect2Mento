import React from 'react';
import './Meetings.css';

function Meetings() {
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
    <div className="meetings">
      <h3>Scheduled Meetings</h3>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>{meeting}</li>
        ))}
      </ul>
    </div>
  );
}

export default Meetings;
