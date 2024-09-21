import React from 'react'
import './WorkContent.css'
import image1 from '../../../Images/pexels-olly-3831890.jpg'
import image2 from '../../../Images/pexels-ketut-subiyanto-4126724.jpg'
import image3 from '../../../Images/pexels-olly-3865577.jpg'
import image4 from '../../../Images/pexels-mikhail-nilov-6930579.jpg'






function WorkContent() {
  return (
    <div class="How-it-work">
        
        <div class="work-first">
            <div class="work-first-left">
                <div class="work-first-left-top">
                    <span>Explore Our Plateform</span>
                </div>
                <div class="work-first-left-bottom">
                    <span>Look around our website to see all the mentors and services we offer. You can browse by category,
                         skills, or your personal needs.</span>
                </div>
            </div>

            <div class="work-first-right">
               <div class="image"><img src={image2} id="image1" alt="logo" />
               </div> 
            </div>
        </div>

        <div class="work-two">
            <div class="work-two-left">
                <img src={image4} id="image2" alt="logo" />
            </div>

            <div class="work-two-right">
                <div class="work-two-right-top">
                    <span>Find Your Mentor</span>
                </div>
                <div class="work-two-right-bottom">
                    <span>Choose a mentor who fits your goals. 
                        You can read their profiles, see their experience,
                         and check reviews from other users</span>
                </div>
            </div>
        </div>

        <div class="work-three">
            <div class="work-three-left">
                <div class="work-three-left-top">
                    <span>Request to Book a Time
                    </span>
                </div>
                <div class="work-three-left-bottom">
                    <span>Once you find the right mentor, 
                        send a booking request. You can pick
                         a date and time that works for you.</span>
                </div>
            </div>
            <div class="work-three-right">
            <img src={image3} id="image2" alt="logo" />
            </div>
        </div>

        <div class="work-four">
            <div class="work-four-left">
            <img src={image1} id="image2" alt="logo" />
               
            </div>
            <div class="work-four-right">
                 <div class="work-four-right-top">
                    <span>Connect with your mentor</span>
                </div>
                <div class="work-four-right-bottom">
                    <span>When your booking is confirmed,
                        you can connect with your mentor for
                         a session through chat or video call.</span>
                </div> 
                <div class="work-four-right-bottom-btn">
                   <button class="find-btn"> Find a mentor</button>
                    
                </div>
            
            </div>    
               
        </div>

    </div>



    


  )
}

export default WorkContent