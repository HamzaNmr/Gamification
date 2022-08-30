import React, {useEffect}from 'react';
import { AppBar, Toolbar, Typography,} from '@material-ui/core';
import useStyles from "./styles";

import MenuIcon from '../MenuIcon/MenuIcon';
import { VscAccount} from "react-icons/vsc";
import Coin from '../../images/dollar.png';
import Logo from '../../images/logoITMAX.png';
import LogoSmall from '../../images/logoITMAXsmall.png';

import Notfication from '../Notfication/Notification';
import Setting from '../Setting/Setting';


import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar = () => {

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const currentId = user?.result?.id;
    const userInfo = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
  
      return (
      <>
       {
        user && 
        <AppBar className={classes.appBar} position='sticky' color='inherit'>
         <Toolbar className={classes.toolbar}>
          
         <img src={LogoSmall} alt='' style={{width: '50px'}} className={classes.logo}/>
        
          <div className={classes.midPart}>
          <div style={{display: 'flex', alignItems: 'center',}}>
          <img src={LogoSmall} alt='' style={{width: '50px', marginRight: '10px'}}/>
          </div>
            <p className={classes.item} onClick={()=>{navigate('/home', { replace: true })}}>IT MAX</p>
            <p className={classes.item} onClick={()=>{navigate('/home', { replace: true })}}>Home</p>
            <p className={classes.item} onClick={()=>{navigate('/Leaderboard', { replace: true })}}>LeaderBoard</p>
            <p className={classes.item} onClick={()=>{navigate('/rewards', { replace: true })}}>Rewards</p>
            <p className={classes.item} onClick={()=>{navigate('/tasks', { replace: true })}}>Tasks</p>
            <p className={classes.item} onClick={()=>{navigate('/community', { replace: true })}}>Community</p>
            <p className={classes.item} onClick={()=>{navigate('/daily', { replace: true })}}>Daily Missons</p>
          </div>
        
          
          <div className={classes.rightPart}>

            <div className={classes.coin}>
            <img src={Coin} alt="" style={{width: '30px',}}/>
            <span>{userInfo?.coins}</span>
            </div>

            <Notfication/>
            <Setting/>
            <MenuIcon />
          </div>

        </Toolbar>
        </AppBar>
       }
      </>
      )
    };
   


export default Navbar;