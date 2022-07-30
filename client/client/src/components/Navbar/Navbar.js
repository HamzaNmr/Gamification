import React from 'react';
import { AppBar, Toolbar, Typography,} from '@material-ui/core';
import useStyles from "./styles";




import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const classes = useStyles();
    const navigate = useNavigate();

      return (
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' onClick={()=>{navigate('/home', { replace: true })}}>Home</Typography>
          <Typography variant='h6' onClick={()=>{navigate('/Leaderboard', { replace: true })}}>LeaderBoard</Typography>
        </Toolbar>
      </AppBar>
      )
    };
   


export default Navbar;