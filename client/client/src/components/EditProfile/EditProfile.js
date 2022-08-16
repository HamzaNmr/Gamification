import React, { useState, useEffect } from 'react';
import { Typography, Divider, Grid, Avatar, Button, TextField} from '@mui/material';
import Input from './Input.js';
import FileBase from 'react-file-base64';



import useStyles from './styles.js';
import './styles.css';

import { useDispatch } from 'react-redux';
import { updateprofile } from '../../actions/user';

const userJSON = JSON.parse(localStorage.getItem('profile'));

const userData = {
selectedFile: `${userJSON.result.imageUrl}`,
firstName: `${userJSON.result.firstName}`,
userName: `${userJSON.result.userName}`, 
lastName: `${userJSON.result.lastName}`, 
bio: `${userJSON.result.bio}`}

const EditProfile = () => {
  
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(userData);
    

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData, 'edit');
 
      dispatch(updateprofile(formData));


};

const clear = () => {
  setFormData({selectedFile: '',firstName: '', lastName: '', userName: '', bio: ''});
}

    

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword);
    
  

  return (
    <div>
        <div>
            <Typography variant='h5' style={{fontWeight: 900, color: '#36205D'}}>Edit Profile</Typography>
            <Divider style={{marginBlock: '10px',}}/>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}className={classes.form}>
        
          <Grid container spacing={1}>
            <div style={{margin: '10px 0 20px 10px', display: 'flex', alignItems: 'end', gap: '30px'}}>
            <Avatar variant="rounded"  alt={userJSON?.result?.name} src={userJSON?.result?.imageUrl} style={{width: '100px', height: '100px',borderRadius: 15, border:"5px solid #432874",}}>
                     <Typography variant='h4'>{userJSON.result.name.charAt(0)}</Typography>
            </Avatar>
            <div style={{marginBottom: '35px'}} className="input-file">
            <FileBase type="file" multiple={false} />
            </div>
            </div>
            <Input name="firstName" label="First Name"  type="text" autoFocus half handleChange={handleChange} />
            <Input name="lastName" label="Last Name"  type="text" half handleChange={handleChange}/>
            <Input name="userName" label="User Name"  type="text" handleChange={handleChange}/>
            <Input name="password" label="Password"  type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} value={userData.password} />
            <Input name="bio" label="Bio"  type="text" handleChange={handleChange}/>
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