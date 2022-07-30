import React from 'react';
import { AppBar, Toolbar, Typography,} from '@material-ui/core';
import useStyles from "./styles";

import MenuIcon from '../MenuIcon/MenuIcon';

import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const classes = useStyles();
    const navigate = useNavigate();

      return (
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
        <Toolbar className={classes.toolbar}>
          
        <Typography variant='h4'>LOGO</Typography>
        
          <div className={classes.rightPart}>
            <p className={classes.item} onClick={()=>{navigate('/home', { replace: true })}}>Home</p>
            <p className={classes.item} onClick={()=>{navigate('/Leaderboard', { replace: true })}}>LeaderBoard</p>
            <p className={classes.item} onClick={()=>{navigate('/rewards', { replace: true })}}>Rewards</p>
          </div>
          
          <div>
            <MenuIcon />
          </div>

        </Toolbar>
      </AppBar>
      )
    };
   


export default Navbar;