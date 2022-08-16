import React from 'react';
import { Typography, Card, CardContent, Box, CardMedia, ButtonBase } from '@mui/material';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

import Coin from '../../../images/dollar.png';
import QuestionImage from '../../../images/light-bulb.png';
import DescriptionImage from '../../../images/job-seeking.png';
import VideoImage from '../../../images/video.png';

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";



const arr = [{question: '?', description: 'x'}, {description: 'x', videoUrl: 'v'}, {question: '?', description: 'x',videoUrl: 'v'}, {}, {},{}, {},{},{},{}]
const Task = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const openTask = () => {
      navigate('/tasks/task-detail', { replace: false });
    }

  return (
   arr.map((task,i) => (

    <ScrollAnimation animateIn="animate__bounceInRight" key={i}>
    
    <Card raised elevation={6} className={classes.card} sx={{ borderRadius: 5}} key={i}>
    <CardMedia
    component="img"
    sx={{ width: 151 }}
    image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    alt="Live from space album cover"
  />

    <ButtonBase style={{width: '100%', height: '100%', display: 'block',
    textAlign: 'initial',}} onClick={openTask}>
    <CardContent sx={{ }}>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', width: '100%' }}>
      <div style={{height:'100px', width: '70%', flexWrap: 'wrap', wordBreak: 'break-word', overflow: 'hidden'}}>
      <Typography component="div" variant="h5" style={{fontWeight: 700, color: '#432874', marginBottom: '10px'}}>
        Live From Space
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div" style={{fontSize: '.8rem'}}>
        Mac Millerllllllllllllllllllllllllllllllllidia
      </Typography>
      </div>

     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '70px'}}>
     <div className={classes.coin}>
            <img src={Coin} alt="" style={{width: '30px',}}/>
            <span>5.2</span>
      </div>
      
     </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',}}>
        <div style={{width: '70%', display: 'flex',}}>
          <img alt='' src={DescriptionImage} style={{width: 20, height: 20,  marginRight: '10px'}}/> 
          {
            task.question && task.videoUrl ? 
            <div>
            <img alt='' src={QuestionImage} style={{width: 20, height: 20, marginRight: '10px'}}/> 
            <img alt='' src={VideoImage} style={{width: 20, height: 20}}/>
            </div> 
           :
           task.question ?
              <img alt='' src={QuestionImage} style={{width: 20, height: 20}}/> 
            : task.videoUrl ? 
            <img alt='' src={VideoImage} style={{width: 20, height: 20}}/>
            : null
            
          }
        </div>
        {/* <div>
          <Typography variant='body2' style={{color: '#432874', fontSize: '.8rem', fontWeight: 700,}}>view more</Typography>
        </div> */}
      </div>
      
    </CardContent>
    </ButtonBase>
  
</Card>
</ScrollAnimation>
   ))
  )
}

export default Task