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
  const [currentId, setCurrentId] = useState(null);


   useEffect(() => {
    setCurrentId(user?.result?.id || user?.result?._id);
    dispatch(getusers());
}, [currentId, dispatch]);

  const { users, isLoading } = useSelector((state) => state.user);
  console.log(users);
  
  return (
   
    <div>    
        <Container maxWidth='xl' style={{marginTop: '70px'}}>
     <Grid item>
        <ProfileCard/>
      </Grid>

     <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
     <Grid item lg={4} md={12}>
        { !isLoading ? <LeaderCard/> : <Skeleton sx={{ bgcolor: '#E9E8EA' }} variant="rectangular" width={500} height={350} /> }
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
      
    </div>
  )
}

export default Home;