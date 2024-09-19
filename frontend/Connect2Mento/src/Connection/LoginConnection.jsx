import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './LoginConnection.css'


function LoginConnection() {
  return (
    <div id="wrapper">
        <HeaderContent/>


<div class="loginview">
            <div class="log">
              <span class="logtit">Login</span>
            </div>
            
            
            <div class="divis">
              
            </div>
            
            <div class="fields">
              
            </div>
            
            <div class="usefield">
                <p class="usernametitle">User name or Email</p>
                <div className="searchbar">
                  <input 
                    type="text"  
                    className="username"
                  />
                </div>
            </div>
            
            <div class="pasfield">
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
            
            <div class='loginbutton'>
            <button className="loginbtn">Login</button>
            </div>
            
            
            <span class="forgotpasswordname">Fogot your password ? click here</span>
            
            <div class="name"></div>
            
            <div class="loginwithtitle">
                <p class="loginwith">Or Login With</p>
            </div>
            
            <span class="dontaccount">Don’ t have an account ?</span>

            <a href="/signup" className="signuplink">Sign Up</a>
            
            <div class="googicon"></div>
            
            <span class="googword">Google</span>
            
            <span class="microword">Microsoft</span>
            
            <div class="microsicon"></div>
        
        </div>
    
    

</div>
    
  )
}

export default LoginConnection