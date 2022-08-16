import React, { useState } from 'react';
import { Typography, Divider, Grid, Avatar, Button} from '@mui/material';
import Input from './Input.js';
import FileBase from 'react-file-base64';


import useStyles from './styles.js';
import './styles.css';



const EditProfile = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword);

  

  return (
    <div>
        <div>
            <Typography variant='h5' style={{fontWeight: 900, color: '#36205D'}}>Edit Profile</Typography>
            <Divider style={{marginBlock: '10px',}}/>
        </div>
        <form autoComplete="off" className={classes.form}>
        
          <Grid container spacing={1}>
            <div style={{margin: '10px 0 20px 10px', display: 'flex', alignItems: 'end', gap: '30px'}}>
            <Avatar variant="rounded"  alt={user?.result?.name} src={user?.result?.imageUrl} style={{width: '100px', height: '100px',borderRadius: 15, border:"5px solid #432874",}}>
                     <Typography variant='h4'>{user.result.name.charAt(0)}</Typography>
            </Avatar>
            <div style={{marginBottom: '5px'}} className="input-file">
            <FileBase type="file" multiple={false}/>
            </div>
            </div>
            <Input name="firstName" label="First Name"  type="text" autoFocus half/>
            <Input name="lastName" label="Last Name"  type="text" half/>
            <Input name="userName" label="User Name"  type="text"/>
            <Input name="password" label="Password"  type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword}/>
            <Input name="bio" label="Bio"  type="text" minRows={4}/>
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
          <Button variant="contained"  size="small" fullWidth onClick={{}} className={classes.clearButton}
          style={{ borderRadius: 7,
            backgroundColor: "#9687DB",
            color:"#eee",
            fontSize: "1.1rem",
            fontWeight:"600",
            transition: ".5s ease",}}
          > Clear </Button>

        </form>
    </div>
  )
}

export default EditProfile