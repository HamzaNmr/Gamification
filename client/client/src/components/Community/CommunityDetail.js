import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {Grid, Paper, Typography, TextField, Button, Avatar, Grow } from '@material-ui/core';
import useStyles from './styles';


import CommentsImage from '../../images/comments.png';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';
import { getGroup, commentGroup } from '../../actions/community';

import Comment from './Comment';

const CommunityDetail = () => {

  const classes = useStyles();
  const { group, isLoading } = useSelector((state) => state.community);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const { id } = useParams();

  useEffect(() => {
    dispatch(getGroup(id));
  },[id]);

  if(!group) return null;

  if(isLoading){
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        loading...
      </Paper>
    );
  }
    

  return (
   <Grow in>
     <div style={{margin: '77px 0 30px 0'}}>
      <Paper elevation={12} className={classes.paper}>
       <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>

        <Grid item lg={7} md={6} sm={12}>
         
          
           <Comment group={group}/>
         
        </Grid>

        <Grid item lg={5} md={6} sm={12}>

          <div style={{marginBottom: '50px'}}>
          <div style={{display: 'flex', alignItems: 'start', gap: '30px'}}>
          <Avatar variant='rounded' alt='' src={group?.imageUrl} style={{width: '150px', height: '150px', border:"3px solid #432874",}}>
                     <Typography variant='h4'>{group?.title.charAt(0)}</Typography>
          </Avatar>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Typography variant='h4' style={{fontWeight: 700, color: '#432874'}}>{group?.title}</Typography>
          <Typography variant='subtitle2'> <span style={{fontWeight: 700,}}> <EngineeringOutlinedIcon style={{color: '#432874', marginRight: '10px'}}/> Section : </span>{group?.type}</Typography>
          <Typography variant='subtitle2'> <span style={{fontWeight: 700}}><FollowTheSignsOutlinedIcon style={{color: '#432874', marginRight: '10px'}}/>Bio : </span>this group for duscussing about code.</Typography>
          </div>
          </div>
          </div>
        
        

        </Grid>

       </Grid>
      </Paper>
    </div>
   </Grow>
  )
}

export default CommunityDetail;