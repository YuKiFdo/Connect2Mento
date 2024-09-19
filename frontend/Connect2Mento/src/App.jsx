import React from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'
import AchieveContent from './Components/AchieveContent/AchieveContent'
import ImageContent from './Components/ImageContent/ImageContent'
import LoginConnection from './Connection/LoginConnection'
import WhyusContent from './Components/WhyusContent/WhyusContent'


function App() {
  return (
    <div id ="wrapper">
      <HeaderContent/>
      {/* <ImageContent/> */}
      <BodyContent/>
      <AchieveContent/>
      <WhyusContent/>
      
      <FooterContent/>
    </div>
  )
}

export default App