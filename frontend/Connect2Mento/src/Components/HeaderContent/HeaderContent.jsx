import React from 'react'
import './HeaderContent.css'
import Menulink from '../MenuLink/MenuLink'
import logo from '../../../Images/iconc2m.png'

function HeaderContent() {
  return (
    <div id="navcontent">
      <a href="/">
      <img  className='logo' src={logo} alt="Connect2Mento" />
      </a>
        
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