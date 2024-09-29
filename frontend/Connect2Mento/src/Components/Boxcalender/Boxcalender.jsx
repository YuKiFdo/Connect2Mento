import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import React, { useState } from 'react';
import './Boxcalender.css'

function Boxcalender() {
    const [date, setDate] = useState(new Date());

  return (
    
    <div className="main-content">
    <h2 className="calendar-title">Calendar</h2>
        <Calendar 
        onChange={setDate}
        value={date}
        className="full-width-calendar"
        />
</div>
)}

export default Boxcalender