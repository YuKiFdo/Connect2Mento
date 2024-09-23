import React from 'react'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './SignupContent.css'
import logoimage from '../../Images/iconc2m.png'


function SignupContent() {
  return (

    <div id="wrapper">
        <HeaderContent/> 

            <div className="signup-container">
            <div className="signup-left">
                <div className="logo">
                  <img src={logoimage} class="mainlogo" alt="logo" />
                </div>
            </div>
            <div className="signup-right">
                <h2>Sign up as a mentee</h2>
                <form className="signup-form">
                    <label className="first">First name</label>
                    <input type="text" placeholder="First name" />

                    <label className="last">Last name</label>
                    <input type="text" placeholder="Last name" />

                    <label className="emailtitle">Email</label>
                    <input type="email" placeholder="Email" />

                    <label className="password">Password</label>
                    <div className="password-field">
                        <input 
                            type= "password"
                            placeholder="Password" 
                        />
                    </div>

                    <button className="signup-button">Sign up</button>

                    <div className="or-divider">Or</div>
                    <button className="google-login">Log in with Google</button>


                    

                    <div className='footerloginlink'>
                      <span class="alreadyaccount">Already have an account ? </span>
                      <a href="/login" className="loginmentee">Login</a>
                    </div>
                    
                    
                </form>
            </div>
        </div>



    
    

</div>
    
  )
}

export default SignupContent