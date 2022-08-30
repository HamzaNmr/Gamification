import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';

import {Grid, Paper,TextField, Button, Avatar, Grow } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useStyles from './styles';
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import CommunityImage from '../../images/chatting.gif';

import { getGroups } from '../../actions/community';

const Community = () => {


    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getGroups());
    }, [dispatch]);
    
      const { groups, isLoading } = useSelector((state) => state.community);
      console.log(groups, isLoading);


     
  return (
    <Grow in>
    <div style={{margin: '77px 0 30px 0'}}>
     <Paper elevation={12} className={classes.paperHero}>
        <div style={{wisth: '100%', textAlign: 'center',}}>
            <Typography variant="h1"  className={classes.title}>Community</Typography>
            <Typography variant='subtitle2' style={{ color: '#333', marginTop: '20px'}}>In this section you can find your group and connect with other employees.</Typography>
            <img src={CommunityImage} alt='' className={classes.imageChat}/>
       <Typography variant='body2'> Illustration by <a href="https://icons8.com/illustrations/author/625472">Ekaterina Rogova</a> from <a href="https://icons8.com/illustrations">Ouch!</a></Typography>
        </div>
       <div className={classes.grid}>
         {
            groups.map((group,i) => (
                <Card style={{ maxWidth: 300, borderRadius: 15 }} key={i}>
                <CardActionArea onClick={() => navigate(`/community/${group._id}`)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={group?.imageUrl}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {group?.title}
                    </Typography>
                    <Typography variant="body2" style={{color: '#432874', marginBlock: '20px 5px',}}>
                     {group?.type}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                    {group?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
        }
       </div>
     </Paper>
    </div>
    </Grow>
  )
}

export default Community;