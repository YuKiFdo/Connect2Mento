import React from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'
import AchieveContent from './Components/AchieveContent/AchieveContent'
import ImageContent from './Components/ImageContent/ImageContent'
import LoginConnection from './Connection/LoginConnection'
import WhyusContent from './Components/WhyusContent/WhyusContent'
import MentorContent from './Components/Mentors/MentorContent'
import WorkContent from './Components/WorkContent/WorkContent'
import FeaturesContent from './Components/FeaturesContent/FeaturesContent'


function App() {
  return (
    <div id ="wrapper" className="container-fluid">
      <HeaderContent/>
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

export default App