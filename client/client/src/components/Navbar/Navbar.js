import React from 'react';
import { AppBar, Toolbar, Typography,} from '@material-ui/core';
import useStyles from "./styles";

import MenuIcon from '../MenuIcon/MenuIcon';
import { VscAccount, VscBell } from "react-icons/vsc";
import Coin from '../../images/dollar.png';

import Notfication from '../Notfication/Notification';


import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const classes = useStyles();
    const navigate = useNavigate();

      return (
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
        <Toolbar className={classes.toolbar}>
          
        <Typography variant='h4'>LOGO</Typography>
        
          <div className={classes.midPart}>
            <p className={classes.item} onClick={()=>{navigate('/home', { replace: true })}}>Home</p>
            <p className={classes.item} onClick={()=>{navigate('/Leaderboard', { replace: true })}}>LeaderBoard</p>
            <p className={classes.item} onClick={()=>{navigate('/rewards', { replace: true })}}>Rewards</p>
          </div>
          
          <div className={classes.rightPart}>

            <div className={classes.coin}>
            <img src={Coin} alt="" style={{width: '30px',}}/>
            <span>5.2</span>
            </div>

            <Notfication/>
            <VscAccount className={classes.icons}/>
            <MenuIcon />
          </div>

        </Toolbar>
      </AppBar>
      )
    };
   


export default Navbar;