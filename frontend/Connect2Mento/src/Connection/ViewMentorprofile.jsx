import React from 'react'
import './ViewMentorprofile.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import profileimage1 from '../../Images/pexels-mikhail-nilov-8871860.png'

function ViewMentorprofile() {
  return (
    <div id="wrapper">

    <HeaderContent/>

    <div class="Profile-back">
    <img src={profileimage1} id="profileimage1" alt="profileimage1" />
    </div>
    <div class="profile">
        <div class="profile-det">
            <div class="profile-top">
                <h1>Sithumi Premechandra</h1>
                <p class="para">Lead Front-end Developer <b>at IFS</b></p>
                <p class="p">Type Script| Java Script | React | web Development </p>
                <br/>
                <div class="other-det">
                    <p class="para2"> Colombo</p>
                <p class="para3">Active this week</p>
                <p class="para4"> Usualy Response within half a day</p>
                </div>
            </div>
            <div class="profile-bottom">
                <h1 class="abouttitle">About</h1>
                <div class="about-para">
                    <p class="aboutpa">Hello! I'm a passionate Frontend Engineer at Coinbase with adeep love for mentoring engineers and guiding them through their professional journeys.</p>
                </div>
            </div>
        </div>
        <div class="peyment-det">
            
            <div class="Mentors">
                <div class="left-mentor">
                    <div class="bottom-part">
                        
                    <div class="bottom-last-left"><p><b>$200  / month</b></p></div>
                    <div class="bottom-top">
                        <p>video calls, pair programming, code reviews, interview practice & unlimited chat on slack. </p>
                        </div>
                        
                        <div class="features-mentor">
                            <p class="vedio">video calls, pair programming.</p>
                            <p class="code">code reviews</p>
                            <p class="inter">interview practice</p>
                            <p class="unlimit"> unlimited chat on slack</p>
                        </div>
                        </div>
        
                        <div class="bottom-last">
                            
                           <div class="bottom-last-right"><button class="findbtn">Book </button></div> </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default ViewMentorprofile