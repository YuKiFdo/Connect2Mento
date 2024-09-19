import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './SignupContent.css'

function SignupContent() {
  return (

    <div id="wrapper">
        <HeaderContent/> 

    <div class="v291_3">
            <div class="v291_4">
              <span class="v291_5">SignUp</span>
            </div>
            
            
            <div class="v291_6">
              
            </div>
            
            <div class="v291_7">
              
            </div>

            <div class="firstnamefield">
                <p class="firstnametitle">First Name</p>
                <div className="searchbar">
                  <input 
                    type="text"  
                    className="firstname"
                  />
                </div>
            </div>

            <div class="lastnamefield">
                <p class="lastnametitle">Last Name</p>
                <div className="searchbar">
                  <input 
                    type="text"  
                    className="lastname"
                  />
                </div>
            </div>
            
            <div class="emailfield">
                <p class="emailtitle">Email Account</p>
                <div className="searchbar">
                  <input 
                    type="text"  
                    className="email"
                  />
                </div>
            </div>
            
            <div class="paswordfield">
                <p class="passwordtitle">Password</p>
                <div className="searchbar">
                  <input 
                    type="text"  
                    className="password"
                  />
                </div>
            </div>
            
            <div class="v291_12">
            </div>
            
            <div class='signupbutton'>
            <button className="signupbtn">Sign Up</button>
            </div>
            
        
            
            <div class="name"></div>
            
            <div class="signupwithtitle">
                <p class="signupwith">Or Sign Up With</p>
            </div>
            
            <span class="alreadyaccounnt">Already have an account ?</span>

            <a href="/login" className="loginlink">Login</a>
            
            <div class="googleicon"></div>
            <span class="googleword">Google</span>
            
            <span class="microsoftword">Microsoft</span>
            
            <div class="microsofticon"></div>
        
        </div>
    
    

</div>
    
  )
}

export default SignupContent