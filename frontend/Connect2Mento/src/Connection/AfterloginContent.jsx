import React from 'react'
import './AfterloginContent.css'
import profilepicture from '../../Images/pngwing.com.png'
import Menulink from '../Components/MenuLink/MenuLink'
import BodyContent from '../Components/BodyContent/BodyContent'
import FooterContent from '../Components/FooterContent/FooterContent'
import AchieveContent from '../Components/AchieveContent/AchieveContent'
import ImageContent from '../Components/ImageContent/ImageContent'
import LoginConnection from '../Connection/LoginConnection'
import WhyusContent from '../Components/WhyusContent/WhyusContent'
import MentorContent from '../Components/Mentors/MentorContent'
import WorkContent from '../Components/WorkContent/WorkContent'
import FeaturesContent from '../Components/FeaturesContent/FeaturesContent'

function AfterloginContent() {
  return (
    <div id="wrapper">

        <div id="navcontent">
            <a href="/">
            <img  className='logo' src='./images/c2m.png' alt="Connect2Mento" />
            </a>
                
            <div className='links'>
                <Menulink linkname="Engineering Mentors" url="/engineering"/>
                <Menulink linkname="Design Mentors" url="/design"/>
                <Menulink linkname="Law Mentors" url="/low"/>
                <Menulink linkname="Career Coaches" url="/career"/>
                <Menulink linkname="Top Mentors" url="/top"/>
            </div>

                <div id="navsecond">
                <a href="/browse" className="browse-btn">Brows All Mentors</a>
                <a href="/dashboard" className="dashboard">Dashboard</a>
                <a href="/profilepicture">
                    <img src={profilepicture} id="profilepicture" alt="profilepicture" />
                </a>
                </div>
            </div>
            
            <BodyContent/>
            <AchieveContent/>
            <WhyusContent/>
            <MentorContent/>
            <WorkContent/>
            <FeaturesContent/>
            <FooterContent/>
    </div>
  )
}

export default AfterloginContent