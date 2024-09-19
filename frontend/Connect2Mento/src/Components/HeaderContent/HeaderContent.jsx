import React from 'react'
import './HeaderContent.css'
import Menulink from '../MenuLink/MenuLink'

function HeaderContent() {
  return (
    <div id="navcontent">
      <div className="logo">Logo</div>

      <div className='link'>
        <Menulink linkname="Engineering Mentors" url="/engineering"/>
        <Menulink linkname="Design Mentors" url="/design"/>
        <Menulink linkname="Low Mentors" url="/low"/>
        <Menulink linkname="Career Coaches" url="/career"/>
        <Menulink linkname="Top Mentors" url="/top"/>
        </div>

        <div id="navsecond">
          <a href="#browse" className="browse-btn">Brows All Mentors</a>
          <a href="/login" className="login">Login</a>
        </div>
    </div>
    
    
  )
}

export default HeaderContent