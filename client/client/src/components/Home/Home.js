import { Container, Grid} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import Skeleton from '@mui/material/Skeleton';


import ProfileCard from '../ProfileCard/ProfileCard';
import LeaderCard from '../LeaderCard/LeaderCard';
import DailyCard from '../DailyCrad/DailyCard';
import ThreeDCard from '../ThreeDCard/ThreeDCard';
import { getusers } from '../../actions/user';


const Home = () => {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);

console.log( currentId , 'home')
   useEffect(() => {
    dispatch(getusers());
}, [currentId, dispatch]);

  const { users, isLoading } = useSelector((state) => state.user);
  console.log(users, isLoading);
  
  return (
   
    <div>    
        {
          !isLoading 
          ? 
          <Container maxWidth='xl' style={{marginTop: '70px'}}>
     <Grid item>
        <ProfileCard currentId={currentId}/>
      </Grid>

     <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
     <Grid item lg={4} md={12}>
        <LeaderCard/>
        <div>
         <div className="wave"></div>
         <div className="wave"></div>
         <div className="wave"></div>
        </div>
      </Grid>

      <Grid item lg={4} md={12}>
        <ThreeDCard/>
      </Grid>

      <Grid item lg={4} md={12}>
        <DailyCard/>
      </Grid>
     
     </Grid>
    </Container>
    :
       <div style={{marginTop: '100px'}}>
        <div className="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
       </div>
        }
      
    </div>
  )
}

export default Home;