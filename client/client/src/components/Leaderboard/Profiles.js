import React, { useState } from "react";
import { useSelector } from 'react-redux';


import useStyles from "./styles";
import "./Style.css";
import { Paper, Typography, Avatar, Grow } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-animate-on-scroll";
import meditatingAnime from '../../images/meditatingAnime.gif'
import Fire from '../../images/fire.png';
import Clapping from '../../images/clapping.png';
import Cool from '../../images/cool.png';
import mushroom from '../../images/mushroom.png';

export default function profiles({ MYLeaderboard }) {

 

  return (
    <div id="profile">
      {Item(MYLeaderboard)}
    </div>
  );
}

function Item(data) {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);
  const usersInfo = useSelector((state) => state.user.users);
 
  const leaders = useSelector((state) => state.user.users.sort((a, b) => b.level - a.level ));

  const color = ['#FFBE5D', '#00CEC9', '#E17055'];
  const emoji = [`${Fire}`, `${Cool}`, `${Clapping}`]; 

  return (
    <Grid container alignItems='stretch' spacing={1}>
      <Grid item lg={4} sm={12} className={classes.leftGrid}  style={{
        display: 'flex', flexDirection: 'column', alignItems: "end", paddingInline: '20px' 
      }}>

        {/* card top */}
        <ScrollAnimation animateIn="animate__bounceInLeft" >
        {usersInfo.map((user, i) => (
      (user?._id === currentId) && 
        <div className={classes.cardTop}  key={i}>
        
          <div>
          <Typography variant="subtitle1">My rank</Typography>
          <Typography variant="h4"> {i+1}th place</Typography>
          </div>

          <div>
          <Typography variant="subtitle1">Level</Typography>
          <Typography variant="h4">{user?.level}</Typography>
          </div>

        </div>
        ))}
      </ScrollAnimation>
      {/* card bottom */}
      <ScrollAnimation animateIn="animate__bounceInLeft" >
     
        <div className={classes.cardBottom}>
    
              <Typography variant="h5" className={classes.mySecondCard}>
               Top Leader in IT MAX
              </Typography>
              <Avatar
                alt=""
                src={leaders[0]?.imageUrl}
                style={{
                  width: 100,
                  height: 100,
                 
                }}
              />
            <div>
              <Typography variant="h5" className={classes.mySecondCard}>
                {leaders[0]?.name}
              </Typography>
            
            <Typography className={classes.myCard}>
              @{leaders[0]?.userName}
            </Typography>
            </div>
         
        </div>
   
        </ScrollAnimation>

      </Grid>

{/* /////////////////////////////////////////////////////////////////////// */}

    <Grid item sm={12} lg={5} className={classes.rightGrid}>
      
        
         

            <ScrollAnimation animateIn="animate__bounceInRight" >
              <Paper className={classes.leaderboardCard}>
              <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', marginBottom: '14px'}}>
              <div style={{color: 'white', marginLeft: '35px'}} className={classes.centered} >
                    <Typography variant="body2">Rank</Typography>
                    <Typography variant="body2">Players</Typography>
              </div>
              <div style={{color: 'white', marginRight: '50px'}}>
                <Typography variant="body2"># Level</Typography>
              </div>
              </div>
                {leaders.map((user, i) => (
                  <Paper className={classes.bar} key={i}>
                  <div className={classes.spaces}>
                  
                      <div style={{color: '#333'}} className={classes.centered}>
                       <div className={classes.number} style={{backgroundColor: `${color[i] || '#333'}`}}>{i+1}</div>
                        <Avatar alt="" src={user.imageUrl} style={{width: 50, height: 50, border: '1px solid #36205D'}}>
                        </Avatar>
                        <div>
                        <Typography variant='subtitle1' style={{fontWeight: 500}}>
                          {user.name}
                        </Typography>
                        <Typography variant='caption'  style={{color: '#36205D', fontWeight: 'bold'}} className={classes.centered}>
                          @{user.userName}
                        </Typography>
                        </div>
                      </div>
                      <div className={classes.centered}>
                          <span style={{color:`${color[i] || '#333'}`, fontWeight: '900'}}>{user.level}</span>
                          <img alt='' src={`${emoji[i] || mushroom}`} style={{width:'20px', height: '20px'}}/>
                      </div>
                  </div>
              </Paper>
                ))}
              </Paper>
              </ScrollAnimation>
          </Grid>
       

       <Grid item lg={3} sm={12}>
       <ScrollAnimation animateIn="animate__bounceInRight" >
       <div>
       <img src={meditatingAnime} alt="" style={{width: 300, height: 300}}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
              backgroundColor: '#EBEAEC', border: '3px solid #333', borderRadius: 15, padding: '1rem'}}>
        <Typography variant="h4">
          Dear,
        </Typography>
        <Typography variant="h6">
          Go, and be the first one here. The hard work will make you the best.
        </Typography>
        </div>
       </div>
       </ScrollAnimation>
       </Grid>

     
    </Grid>
  );
}

