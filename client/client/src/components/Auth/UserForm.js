import React, { useState, useEffect }  from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import BadgeIcon from '@mui/icons-material/Badge';


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from '../../actions/auth';

import { TextField } from '@mui/material';
import './style.css';

const initialState = { firstName: '', lastName: '', email: '', password: ''};
const UserForm = () => {
  
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
};

const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup );
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(isSignup){
        dispatch(signup(formData, navigate));
    }else{
        dispatch(signin(formData, navigate));
    }
};


  return (
    <div>
   
      <div style={{marginTop:'10px'}}>
        <div className="section firstDiv">
            <div className="container">
              <div className="...">
                <div className="...">
                  <div className="...">
                    <h2 className="..."><span style={{marginRight :'30px'}} >SIGN IN</span><span>SIGN UP</span></h2>
                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" onClick={switchMode}/>
                    <label htmlFor="reg-log" />
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h3 className="...">Sign In</h3>
                              <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <input type="email" name="email" className="form-style" placeholder="Email" id="logemail" autoComplete="off"  onChange={handleChange}/>
                                {/* <i className="input-icon uil uil-at" /> */}
                                <AlternateEmailIcon className='input-icon'/>
                              </div>
                              <div className="form-group">
                                <input type="password" name="password" className="form-style" placeholder="Password" id="logpass" autoComplete="off"  onChange={handleChange}/>
                                {/* <i className="input-icon uil uil-lock-alt" /> */}
                                <VpnKeyIcon className='input-icon'/>
                              </div>
                             
                              <button className="btn">submit</button>
                              </form>
                              <p className="letterSpacing"><a href="#0" className="link">Don't have an account? sign up</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="card-back">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h3 className="mb-4 pb-3">Sign Up</h3>
                              <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                <input type="text" name="firstName" className="form-style" placeholder="First Name" id="logname" autoComplete="off" onChange={handleChange} />
                                {/* <i className="input-icon uil uil-user" /> */}
                                <BadgeIcon className='input-icon'/>
                              </div>
                              <div className="form-group">
                                <input type="text" name="lastName" className="form-style" placeholder="Last Name " id="logname" autoComplete="off"  onChange={handleChange} />
                                {/* <i className="input-icon uil uil-user" /> */}
                                <BadgeIcon className='input-icon'/>
                              </div>
                              <div className="form-group mt-2">
                                <input type="email" name="email" className="form-style" placeholder="Email" id="logemail" autoComplete="off"  onChange={handleChange}/>
                                {/* <i className="input-icon uil uil-at" /> */}
                                <AlternateEmailIcon className='input-icon'/>
                              </div>
                              <div className="form-group mt-2">
                                <input type="password" name="password" className="form-style" placeholder="Password" id="logpass" autoComplete="off"  onChange={handleChange}/>
                                {/* <i className="input-icon uil uil-lock-alt" /> */}
                                <VpnKeyIcon className='input-icon'/>
                              </div>
                              <button className="btn" type='submit'>submit</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 

    </div>
  )
}

export default UserForm

