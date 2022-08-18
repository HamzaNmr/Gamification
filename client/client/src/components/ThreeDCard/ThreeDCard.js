import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';


// import WinnerBadge from '../../images/swordsman.png';
import { Typography, Grow, Avatar } from '@material-ui/core';
import LevelAvatar from '../../images/swords.png';





const ThreeDCard = () => {

  

  const classes = useStyles();
   
  const containerMove = (e) => {
      let xAxis = (window.innerWidth / 2 + e.pageX) / 10;
      let yAxis = (window.innerHeight / 2 + e.pageY) / 10;
      document.getElementById('card').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };
  
  const containerEnter = () => {
    document.getElementById('card').style.transition = "all 2s ease-out";
    document.getElementById('image').style.transition = "all 1s ease-out";
    document.getElementById('image').style.transform = "translateZ(150px) rotateY(180deg) rotateX(90deg)";
    document.getElementById('rank').style.color = "#333";
    
  };
  
  const containerLeave = () => {
      document.getElementById('card').style.transform = `rotateY(0deg) rotateX(0deg)`;
      document.getElementById('image').style.transform = "translateZ(0px)";
      document.getElementById('rank').style.color = "#eee";
      document.getElementById('card').style.transition = "all 0.5s ease-in";
      document.getElementById('image').style.transition = "all 1s ease-in"; 
  }; 

  return (
    <Grow in>
    <div className={classes.container} onMouseMove={containerMove} onMouseEnter={containerEnter} onMouseLeave={containerLeave}>
      
     <div id="card" className={classes.card}>
      
      <div className={classes.header}>
        <Typography variant='body1' component='p' style={{fontWeight: 700}}>YOUR RANK</Typography>
        <Avatar variant="square" alt="Remy Sharp" src={LevelAvatar} style={{width: 25, height: 25,}}>
        </Avatar>
      </div>
     <div id="image">
     <Avatar variant='rounded' alt="" src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360' className={classes.image}>
     </Avatar>
       <Typography id="rank"  style={{fontWeight: 900, color: '#eee', marginTop: '10px'}}> RANK 13</Typography>
     </div>
       <div className={classes.paragraph}>
       <Typography variant='body2' style={{fontWeight: 700}}>
        You can see here you rank,
        beat all your freinds and be the best.
       </Typography>
     </div>

     </div>
    </div>
    </Grow>
  )
}

export default ThreeDCard;