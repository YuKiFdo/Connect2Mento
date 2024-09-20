import React from 'react'
import './BrowseAll.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import image1 from '../../Images/Test image.jpg'

function BrowseAll() {
  return (

    <div id="wrapper">

        <HeaderContent/>

        <div class="Mentors">
        <div class="left-mentor">
            <div class="top-part">
                <div class="top-left">
                <img src={image1} id="mainlogo" alt="logo" />
                </div>
                <div class="top-right">
                    <p class="name"><b>Abishek Rajapaksha</b></p>
                    <p class="position">Senior Software Engineer <b>at IFS</b></p>
                    <p class="skill">Interview Expert | JavaScript </p>

                </div>
            </div>
            <div class="bottom-part">
                <div class="bottom-top">Hello! I'm a passionate Frontend Engineer at Coinbase with a
                     deep love for mentoring engineers and guiding them through their professional 
                     journeys.</div>
                <div class="bottom-middle">
                    <p> React | css |web development</p>

                </div>

                <div class="bottom-last">
                    <div class="bottom-last-left"><p><b>$200</b> / month</p></div>
                   <div class="bottom-last-right"><button class="findbtn">View Profile</button></div> </div>
            </div>
        </div>
        <div class="right-mentor">
            <div class="top-part">
                <div class="top-left">
                <img src={image1} id="mainlogo" alt="logo" />
                </div>
                <div class="top-right">
                    <p class="name"><b>Saman Premachandhra</b> </p>
                    <p class="position">QA Engineer <b>at IFS</b></p>
                    <p class="skill">Interview Expert | JavaScript </p>

                </div>
            </div>
            <div class="bottom-part">
                <div class="bottom-top">"Hi! I'm a  QA Engineer who loves guiding and supporting junior engineers as they develop expertise in testing strategies and quality assurance practices." 
                     journeys.</div>
                <div class="bottom-middle">
                    <p> React | css |web development</p>
                </div>

                <div class="bottom-last">
                    <div class="bottom-last-left"><p><b>$200</b> / month</p></div>
                   <div class="bottom-last-right"><button class="findbtn">View Profile</button></div> </div>
            </div>  
        </div>

        {/* <div class="Mentors">
        <div class="left-mentor">
            <div class="top-part">
                <div class="top-left">
                <img src={image1} id="mainlogo" alt="logo" />
                </div>
                <div class="top-right">
                    <p class="name"><b>Pawisha Gamage </b></p>
                    <p class="position">Senior Software Engineer <b>at IFS</b></p>
                    <p class="skill">Interview Expert | JavaScript </p>

                </div>
            </div>
            <div class="bottom-part">
                <div class="bottom-top">Hello! I'm a passionate Frontend Engineer at Coinbase with a
                     deep love for mentoring engineers and guiding them through their professional 
                     journeys.</div>
                <div class="bottom-middle">
                    <p> React | css |web development</p>

                </div>

                <div class="bottom-last">
                    <div class="bottom-last-left"><p><b>$200</b> / month</p></div>
                   <div class="bottom-last-right"><button class="findbtn">View Profile</button></div> </div>
            </div>
        </div>
        <div class="right-mentor">
            <div class="top-part">
                <div class="top-left">
                <img src={image1} id="mainlogo" alt="logo" />
                </div>
                <div class="top-right">
                    <p class="name"><b>Vimantha Silva</b> </p>
                    <p class="position">Senior Software Engineer <b>at IFS</b></p>
                    <p class="skill">Interview Expert | JavaScript </p>

                </div>
            </div>
            <div class="bottom-part">
                <div class="bottom-top">Hello! I'm a passionate Frontend Engineer at Coinbase with a
                     deep love for mentoring engineers and guiding them through their professional 
                     journeys.</div>
                <div class="bottom-middle">
                    <p> React | css |web development</p>

                </div>

                <div class="bottom-last">
                    <div class="bottom-last-left"><p><b>$200</b> / month</p></div>
                   <div class="bottom-last-right"><button class="findbtn">View Profile</button></div> </div>
            </div>  
        </div>
    </div> */}
    </div>

    </div>
    
    
    

  ) 
}

export default BrowseAll