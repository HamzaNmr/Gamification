import { Container, Grid} from '@material-ui/core';
import React from 'react';
import './styles.css';


import ProfileCard from '../ProfileCard/ProfileCard';
import LeaderCard from '../LeaderCard/LeaderCard';
import DailyCard from '../DailyCrad/DailyCard';
import ThreeDCard from '../ThreeDCard/ThreeDCard';


const Home = () => {
  return (
  
    <Container maxWidth='xl' style={{marginTop: '70px'}}>
     <Grid item>
        <ProfileCard/>
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
  )
}

export default Home;