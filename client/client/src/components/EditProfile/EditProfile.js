import React, { useState, useEffect } from 'react';
import { Typography, Divider, Grid, Avatar, Button, TextField} from '@mui/material';
import { IconButton, InputAdornment} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from './Input.js';
import FileBase from 'react-file-base64';



import useStyles from './styles.js';
import './styles.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateprofile } from '../../actions/user';

const userJSON = JSON.parse(localStorage.getItem('profile'));



const EditProfile = ({ currentId }) => {
  
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);

    const [formData, setFormData] = useState({imageUrl: '',firstName: '', lastName: '', userName: '', bio: ''});
    
    useEffect(() => {
      if(userInfo) setFormData(userInfo);
  }, [userInfo])

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value});
// }

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(updateprofile(currentId,{...formData, email: userJSON?.result?.email}));
  console.log('editing...');
};

const clear = () => {
  setFormData({imageUrl: '',firstName: '', lastName: '', userName: '', bio: ''});
}

    

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword);
    
   const type= showPassword ? "text" : "password";
   const name = 'password';

  return (
    <div>
        <div>
            <Typography variant='h5' style={{fontWeight: 900, color: '#36205D'}}>Edit Profile</Typography>
            <Divider style={{marginBlock: '10px',}}/>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}className={classes.form}>
        
          <Grid container spacing={1}>
            <div style={{margin: '10px 0 20px 10px', display: 'flex', alignItems: 'end', gap: '30px'}}>
            <Avatar variant="rounded"  alt={userInfo?.name} src={userInfo?.imageUrl} style={{width: '100px', height: '100px',borderRadius: 15, border:"5px solid #432874",}}>
                     <Typography variant='h4'>{userInfo?.name.charAt(0)}</Typography>
            </Avatar>
            <div style={{marginBottom: '35px'}} className='input-file'>
            <FileBase type="file" multiple={false} onDone={ ({base64}) => setFormData({ ...formData, imageUrl: base64 }) } />
            </div>
            </div>
            <Grid item xs={12} sm={12}>
            <TextField name="firstName" label="First Name"  type="text" autoFocus  style={{width: '49%', marginRight: '2%', marginBottom: '2%'}} variant='filled'
             value={formData.firstName} 
             onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
              />
            <TextField name="lastName" label="Last Name"  type="text" style={{width: '49%', marginBottom: '2%'}}  variant='filled' 
            value={formData.lastName} 
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value})}
            />
            <TextField name="userName" label="User Name"  type="text" fullWidth  style={{marginBottom: '2%'}} variant='filled'
            value={formData.userName} 
            onChange={(e) => setFormData({ ...formData, userName: e.target.value})}
            />
            <TextField name={name} label="Password"  type={type}
            InputProps={ name === 'password' ? {
              endAdornment: (
                <InputAdornment position="end">
                   <IconButton onClick={handleShowPassword}>
                       { type === 'password' ? <Visibility /> : <VisibilityOff /> }
                   </IconButton>
                </InputAdornment>
              )
           } : null}
             fullWidth  style={{marginBottom: '2%'}} variant='filled'/>
            
            <TextField name="bio" label="Bio"  type="text" fullWidth  style={{marginBottom: '2%'}} variant='filled'
            value={formData.bio} 
            onChange={(e) => setFormData({ ...formData, bio: e.target.value})}
            />
            </Grid>
          </Grid>

          <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth
          style={{  borderRadius: 7,
            margin: '30px 0 10px 0',
            backgroundColor: "#432874",
            color:"#eee",
            fontSize: "1.1rem",
            fontWeight:"600",
            transition: ".5s ease",}}
          > Submit </Button>

          <Button variant="contained"  size="small" fullWidth  className={classes.clearButton}
          style={{ borderRadius: 7,
            backgroundColor: "#9687DB",
            color:"#eee",
            fontSize: "1.1rem",
            fontWeight:"600",
            transition: ".5s ease",}}
            onClick={clear}
          > Clear </Button>

        </form>
    </div>
  )
}

export default EditProfile