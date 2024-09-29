import HeaderContent from '../Components/HeaderContent/HeaderContent'
import React, { useState } from 'react';
import './LoginConnection.css'; 
import logoimage from '../../Images/iconc2m.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AfterloginContent from './AfterloginContent';


const LoginConnection = () => {
    const [isMentee, setIsMentee] = useState(true);

    return (

      <div id="wrapper">

      <HeaderContent/>

      <div className="login-container">
            <span class="logtit">Login</span>
            <div className="login-left">
                <div className="logo">
                  <img src={logoimage} class="mainlogo" alt="logo" />
                </div>
            </div>
            <div className="login-right">
                <div className="tab-switch">
                    <button 
                        className={isMentee ? 'active' : ''} 
                        onClick={() => setIsMentee(true)}
                    >
                        I'm a mentee
                    </button>
                    <button 
                        className={!isMentee ? 'active' : ''} 
                        onClick={() => setIsMentee(false)}
                    >
                        I'm a mentor
                    </button>
                </div>

                <form className="login-form">
                    <label className='label1'>Email or username</label>
                    <input type="text" placeholder="Enter email or username" />

                    <label className='label2'>Password</label>
                    <input type="password" placeholder="Enter password" />


                    <Link to="/afterlogincontent">
                        <button className="login-button">Log in</button>
                    </Link>

                    <Routes>
                        <Route path="/afterlogincontent" element={<AfterloginContent />} />
                    </Routes>
                    
                    

                    {!isMentee ? null : (
                        <>
                            <div className="or-divider">Or</div>
                            <button className="google-login">Log in with Google</button>
                        </>
                    )}

                    <div className="login-footer">
                        <a  class="forgot" href="/forgot-password">Forgot password?</a>
                        <p class="donot">
                            Don’t have an account? 
                            <a href={isMentee ? '/signup-mentee' : '/signup-mentor'}>
                                {isMentee ? ' Sign up as a mentee' : ' Apply to be a mentor'}
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

      </div>
       
    );
};

export default LoginConnection;
