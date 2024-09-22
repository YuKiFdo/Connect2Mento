import React from 'react'
import './HeaderContent.css'
import Menulink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id="navcontent">
        <img  className='logo' src='./images/c2m.png' alt="Connect2Mento" />


      <div className='link'>
        <Menulink linkname="Engineering Mentors" url="/engineering"/>
        <Menulink linkname="Design Mentors" url="/design"/>
        <Menulink linkname="Law Mentors" url="/low"/>
        <Menulink linkname="Career Coaches" url="/career"/>
        <Menulink linkname="Top Mentors" url="/top"/>
        </div>

        <div id="navsecond">
          <a href="/browse" className="browse-btn">Brows All Mentors</a>
          <a href="/login" className="login">Login</a>
        </div>
    </div>
    
    
  )
}

export default HeaderContent