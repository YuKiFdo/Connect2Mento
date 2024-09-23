import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './SignupContent.css'


const SignupContent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };
  
  return (

    <div id="wrapper">
        <HeaderContent/> 

    {/* <div class="back">
            <div class="blok">
              <span class="signtitle">SignUp</span>
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
        
        </div> */}





            <div className="signup-container">
            <div className="signup-left">
                <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                </div>
            </div>
            <div className="signup-right">
                <h2>Sign up as a mentee</h2>
                <form className="signup-form">
                    <label>First name</label>
                    <input type="text" placeholder="First name" />

                    <label>Last name</label>
                    <input type="text" placeholder="Last name" />

                    <label>Email</label>
                    <input type="email" placeholder="Email" />

                    <label>Password</label>
                    <div className="password-field">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            placeholder="Password" 
                        />
                        <span className="show-password" onClick={togglePasswordVisibility}>
                            {passwordVisible ? 'Hide' : 'Show'}
                        </span>
                    </div>

                    <ul className="password-rules">
                        <li>Must be at least 8 characters</li>
                        <li>Must include one lowercase character</li>
                        <li>Must include one uppercase character</li>
                        <li>Can't be too common</li>
                    </ul>

                    <div className="captcha">
                        <div className="captcha-placeholder">
                            {/* Replace this with actual reCAPTCHA integration */}
                            <p>I'm not a robot</p>
                        </div>
                    </div>

                    <button className="signup-button">Sign up</button>
                </form>
            </div>
        </div>



    
    

</div>
    
  )
}

export default SignupContent