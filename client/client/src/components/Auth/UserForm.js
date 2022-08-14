import React from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './style.css'
const UserForm = () => {
  
  return (
    <div>
      {/* <div>
        <ExternalLink href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
      </div> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" /> */}
      
      <div style={{marginTop:'99px'}}>
        <div className="section firstDiv">
            <div className="container">
              <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-5">
                  <div className="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 className="mb-0 pb-3"><span style={{marginRight :'10px'}} >Sign In</span><span>Sign Up</span></h6>
                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                    <label htmlFor="reg-log" />
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Sign In</h4>
                              <div className="form-group">
                                <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                                <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button className="btn mt-4">submit</button>
                              <p className="mb-0 mt-4 text-center letterSpacing"><a href="#0" className="link">Don't have an account? sign up</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="card-back">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Sign Up</h4>
                              <div className="form-group">
                                <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group mt-2">
                                <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                                <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button className="btn mt-4">submit</button>
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
