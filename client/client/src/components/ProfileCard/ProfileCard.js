import React from 'react';

import useStyles from './styles';
import { Paper, Typography, Grow, Avatar, LinearProgress, Tooltip} from '@material-ui/core';


import HdrStrongIcon from '@mui/icons-material/HdrStrong';

import LevelAvatar from '../../images/swords.png';
import Star from '../../images/favourites.png';


import ProfileModel from './ProfileModel/ProfileModel';
import ThreeDEarth from '../ThreeDEarth/ThreeDEarth';


import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  width: '100%',
  borderRadius: 5,
  backgroundColor: '#271B3D',
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FFBE5D',
  },
}));



const ProfileCard = () => {

    const classes = useStyles();
    const expereience = 20;

    
  return (
    <Grow in>
        <div>
            <Paper style={{ backgroundColor: '#36205D', padding: '2rem 3rem', borderRadius: 15, marginBottom: '30px', display: 'flex', justifyContent:'space-between',}}>
               <div  className={classes.gridDiv}>
                <div>
                  <Avatar variant="rounded"  alt="Remy Sharp" src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360" style={{width: '150px', height: '150px',borderRadius: 15, border:"5px solid #9687DB"}}>
                  </Avatar>
                </div>

                <div>
                <div style={{color: 'white'}} className={classes.centered}>
                  <Avatar variant="square" alt="Remy Sharp" src={LevelAvatar} style={{width: 30, height: 30,}}>
                  </Avatar>
                  <div>
                  <ProfileModel/>
                  <Typography variant='caption'  style={{color: '#CBC8FF'}} className={classes.centered}>
                    @Hamza_Nemer <HdrStrongIcon/> Level 2
                  </Typography>
                  </div>
                </div>

                

                <div style={{display:'flex', alignItems:'center', justifyContent: 'center', gap: '10px', marginTop: '20px',}} >
                <Tooltip title="Experience">
                 <img alt='Experience' src={Star} style={{width: 20, height: 20,}} />
                </Tooltip>

                  <BorderLinearProgress variant="determinate" value={expereience * 2}/>
                  
                  <Typography variant='body2' style={{color:'#CBC8FF'}}>{expereience}/50</Typography>
                 
                </div>

                </div>

               </div>

              <ThreeDEarth/>
      
            </Paper>
        </div>
    </Grow>
  )
}

export default ProfileCard;
