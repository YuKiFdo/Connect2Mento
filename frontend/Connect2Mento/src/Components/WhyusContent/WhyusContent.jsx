import React from 'react'
import './WhyusContent.css'
import WhyusContentfirstimage from '../../../Images/15 Map and Navigation Icons.jpeg'
import WhyusContentsecimage from '../../../Images/pexels-kindelmedia-6994284.jpg'

function WhyusContent() {
  return (
    <div class="content">
        
        <div class="firstbox">
        <img src={WhyusContentsecimage} id="WhyusContentsecimage" alt="WhyusContentsecimage" />
        </div>
        
        <div class="secondbox"></div>
        
        <div class="image1"></div>
        
        <div class="thirdbox"></div>
        
        <div class="fourthbox">
        <img src={WhyusContentfirstimage} id="WhyusContentfirstimage" alt="WhyusContentfirstimage" />
        </div>
        
        <span class="firstboxtitle"> Video & Text Conversation</span>
        
        <span class="secondboxtitle"> 24 / 7 Service</span>
        
        <span class="fourthboxtitle">Accesses from any  Location</span>
        
        <span class="thirdhboxtitle">The Meeting can<br/> be held at <br/>a convenient time for you</span>
        
        <span class="maintit">Unlock Your Potential with Personalized Mentoring Solutions!</span>
        
        <span class="mainp">"Empowering learners with expert guidance anytime, anywhere. Connect, learn, and grow with personalized online mentoring sessions."</span>
    
    </div>

  )
}

export default WhyusContent