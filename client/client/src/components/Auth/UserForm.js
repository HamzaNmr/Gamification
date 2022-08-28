import React, { useState, useEffect } from 'react';
import './style.css';
import useStyles from './styles';
import TextField from './FormsUI/Textfield/index'
import OutlinedInput from '@mui/material/OutlinedInput';

import IconButton from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { Grid, Typography, Box } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

import {Formik, Form} from 'formik'
import * as Yup from 'yup' 

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: ''};

const INITIAL_FORM_STATE = {
email: '',
password: ''
}

const FORM_VALIDATION = Yup.object().shape({
 email: Yup.string()
           .email('Invalid email')
           .required('Please enter email'),
//  password: Yup.string()
//               .min(7,'Password should be minimum 7 Characters')
//               .required('Please enter password')
})

const UserForm = ()=> {

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const [emailError, setEmailError] = useState('true')
    // const [passwordError, setPasswordError] = useState('true')

    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
    const handleSubmit = (e) => {
        e.preventDefault()

        // setEmailError(true)
        // setPasswordError(true)

        // if(!email){setEmailError(false)}
        // if(password === ''){setPasswordError(false)}

        // if(email && password){
        //     console.log(email,password)
        // }


        console.log(formData);
        if(isSignup){
            dispatch(signup(formData, navigate));
        }else{
            dispatch(signin(formData, navigate));
        }
    }

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setFormData({ ...formData, [event.target.name]: event.target.value});
      };

      const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup );
    };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      }; 

      const switchSignInToUp = () =>{
        let element = document.getElementById('reg-log');
        element.checked = true;
      }

    return(
          <div>
              <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"/>
              <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
              
              <div style={{marginTop:'70px'}}>
              <div className="section firstDiv">
                  <div className="container">
                  <div className="...">
                      <div className="...">
                      <div className="...">
                          <Grid className={classes.signInUpStyle} container spacing ={4} justify='center'style={{
                                          position: 'relative',
                                          top:'-16px',
                                          textTransform: 'uppercase',
                                        }}>
                          <Grid item>
                          <Typography variant='h5'
                                      align='left'
                                      gutterBottom>Sign In
                          </Typography>
                          </Grid>
                          <Grid item>
                          <Typography variant='h5'
                                      align='right'
                                      gutterBottom>Sign Up
                          </Typography>
                          </Grid>
                          </Grid>
                          <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" onClick={switchMode}/>
                          <label htmlFor="reg-log" />
                          <div className="card-3d-wrap mx-auto">
                          <div className="card-3d-wrapper">

                            <div id='first-card' className="card-front">
                              <Formik 
                                initialValues={{
                                  ...INITIAL_FORM_STATE
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={values => {
                                  console.log(values);
                                }}
                              >
                                <Form>
                                    <div className="center-wrap">
                                      <div className="section text-center">
                                      <Grid 
                                            direction='column' 
                                            style={{
                                              position: 'relative',
                                              top:'-30px'
                                            }}
                                              >
                                      <Typography variant='h6'
                                                  gutterBottom
                                                  className= {classes.signInUpColor}
                                                  >Sign In</Typography>
                                      </Grid>
                                      <div className='title1'></div>
                                      <br></br>
                                      
                                    <form  noValidate autoComplete='off' onSubmit={handleSubmit}>
                                      <TextField 
                                        required
                                        name = 'email'
                                        InputLabelProps={{style: { color:'#432874'}}}
                                        className={classes.inputStyle}
                                        sx={{ m: 1, width: '43ch' }}
                                        id="input-with-icon-textfield"
                                        // onChange={(e) => setEmail(e.target.value)}
                                        // error={!emailError}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <AlternateEmailOutlinedIcon className = 'input-icon1' />
                                                </InputAdornment>
                                                ),
                                                }}
                                      />
                                    <br></br>
                                    
                                      <FormControl sx={{ m: 1, width: '43ch' }} variant="outlined" /*onChange={(e) => setPassword(e.target.value)}*/>
                                      <InputLabel htmlFor="outlined-adornment-password" className='labelColor'>Password</InputLabel>
                                          <OutlinedInput
                                          id="outlined-adornment-password"
                                          type={values.showPassword ? 'text' : 'password'}
                                          value={values.password}
                                          onChange={handleChange('password')}
                                          fullWidth= "true"
                                          color="secondary"
                                          // error={!passwordError}
                                          placeholder='Enter your password'
                                          // margin="dense"
                                          startAdornment={
                                              <InputAdornment position="start">
                                                <LockIcon className = 'input-icon1'/>
                                              </InputAdornment>
                                            }
                                            label="Password"

                                          endAdornment={
                                          <InputAdornment position="end">
                                              <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}
                                              edge="end"
                                              >
                                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                              </IconButton>
                                          </InputAdornment>
                                          }               
                                      />
                                      </FormControl>                           

                                      <br></br>
                                      <br></br>
                                      <Button variant="contained"
                                              className="btn firstBtn"
                                              type='submit'
                                              color='secondary'
                                      >submit</Button>
                                      
                                      
                                    </form>
                                      <p className="mb-0 mt-4 text-center "><a href="#0" className="link" onClick={() => switchSignInToUp()}><span className='linkFirstPart'>Don't have an account?</span><span className='linkSecondPart'> Sign Up</span></a></p>
                                      </div>
                                  </div>
                                </Form>
                              </Formik>

                              
                            </div>

                            <div className="card-back">
                              <div className="center-wrap">
                                  <div className="section text-center">
                                  <Grid 
                                        direction='column' 
                                        style={{
                                          position: 'relative',
                                          top:'25px'
                                        }}
                                          >
                                  <Typography variant='h6'
                                              gutterBottom
                                              className= {classes.signInUpColor}
                                              >Sign Up</Typography>
                                  </Grid>
                                  <div className='title2'></div>
                                  <br></br>     
                                  
                                <form onSubmit={handleSubmit}>

                                  <div className="form-group SignUp1">
                                      <input type="text" name="firstName" className="form-style" placeholder="First Name" id="logname" autoComplete="off" onChange={handleChange} />
                                      
                                      <PermIdentityIcon className='input-icon'/>
                                  </div>
                                  <div className="form-group">
                                      <input type="text" name="lastName" className="form-style" placeholder="Last Name " id="logname" autoComplete="off"  onChange={handleChange} />
                                      
                                      <BadgeIcon className='input-icon'/>
                                  </div>
                                  <div className="form-group mt-2">
                                      <input type="email" name="email" className="form-style" placeholder="Email" id="logemail" autoComplete="off"  onChange={handleChange}/>
                                      
                                      <AlternateEmailIcon className='input-icon'/>
                                  </div>
                                  <div className="form-group mt-2">
                                      <input type="password" name="password" className="form-style" placeholder="Password" id="logpass" autoComplete="off"  onChange={handleChange}/>
                                      
                                      <LockIcon className='input-icon'/>
                                  </div>
                              
                                  <Button variant="contained"
                                          type='submit'
                                          className="btn secondBtn"
                                          color='secondary'      
                                  >submit</Button>
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
    );
}
export default UserForm;