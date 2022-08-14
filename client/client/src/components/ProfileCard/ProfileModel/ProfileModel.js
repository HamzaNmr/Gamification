import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Typography, Avatar, LinearProgress,  Divider, Tooltip} from '@material-ui/core';

import useStyles from './styles';

import HdrStrongIcon from '@mui/icons-material/HdrStrong';

import LevelAvatar from '../../../images/swords.png';
import Star from '../../../images/favourites.png';
import SpeedBadge from '../../../images/running.png';
import OrganizeBadge from '../../../images/morning-routine.png';
import CommunityBadge from '../../../images/unity.png';
import WinnerBadge from '../../../images/gamification.png';
import TopBadge from '../../../images/award.png';
import CompleteBadge from '../../../images/loading.png';
import Coin from '../../../images/dollar.png';

import RewardsPart from './RewardsPart';


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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 650,
  backgroundColor: '#ECEBED',
  boxShadow: 24,
  borderRadius: '15px',
};



const ProfileModel = () => {

    const classes = useStyles();
    const expereience = 20;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const switchProfile = () => {
        document.getElementById('profilePart').style.display = 'flex';
        document.getElementById('rewardsPart').style.display = 'none';
        document.getElementById('profileWord').style.color = "#333";
        document.getElementById('profileWord').style.borderBottom = "3px solid  #6133B4";
        document.getElementById('rewardsWord').style.color = "#4E4A57";
        document.getElementById('rewardsWord').style.borderBottom = "none";

    }

    const switchReward = () => {
        document.getElementById('profilePart').style.display = 'none';
        document.getElementById('rewardsPart').style.display = 'flex';
        document.getElementById('profileWord').style.color = "#4E4A57";
        document.getElementById('profileWord').style.borderBottom = "none";
        document.getElementById('rewardsWord').style.color = "#333";
        document.getElementById('rewardsWord').style.borderBottom = "3px solid  #6133B4";
     
    }


  return (
    <div>
       <Tooltip title="Profile">
       <Typography variant='subtitle1' style={{fontWeight: 700, cursor: 'pointer',}}  onClick={handleOpen} >
                    Hamza Nemer
        </Typography>
       </Tooltip>

        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

           


          <div style={{ background: 'linear-gradient(to bottom,#36205D, #6133B4, #ECEBED)', padding: '2rem 3rem', borderRadius: '15px 15px 0 0', marginBottom: '30px', display: 'flex', justifyContent:'space-between',alignItems:'start'}}>
               
          
          <div  className={classes.gridDiv}>
                <div>
                  <Avatar variant="rounded"  alt="Remy Sharp" src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360" style={{width: '150px', height: '150px', borderRadius: 15, border:"5px solid #9687DB"}}>
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
                  <img alt='Experience' src={Star} style={{width: 20, height: 20,}} />
                  <BorderLinearProgress variant="determinate" value={expereience * 2}/>
                  <Typography variant='body2' style={{color:'#CBC8FF'}}>{expereience}/50</Typography>
                </div>

                </div>

               </div> 

               <div className={classes.coin}>
               <img src={Coin} alt="" style={{width: '30px',}}/>
               <span style={{color:'white'}}>5.2</span>
               </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px', cursor: 'pointer', padding:'0 50px'}}>
               
              <div style={{display: 'flex', marginBottom: '30px'}}>
              <Typography style={{marginRight:'30px', fontWeight: 700,  color: '#333', borderBottom: '3px solid  #6133B4', padding:'10px 20px', transition: '.3s ease-in'}} onClick={switchProfile} id='profileWord'>Profile</Typography>  
                <Typography style={{marginRight:'30px', fontWeight: 700,  color: '#4E4A57', padding:'10px 20px', transition: '.3s ease',}} onClick={switchReward} id='rewardsWord'>Rewards</Typography>
              </div>

              <div>
                <Button variant='contained'>Edit profile</Button>
              </div>
               
            </div>

            <div style={{padding: '0 50px', display: 'flex',}} id='profilePart'>
            <div style={{width: '100%'}}>
                <div>
                <Typography variant='h6' style={{fontWeight:'700', color: '#4E4A57',}}>Bio</Typography>
                <Divider style={{width: '70%', marginBlock: '10px'}}/>
                <Typography variant='body2'>no description from user</Typography>
                </div>

                <div style={{marginTop: '30px'}}>
                <Typography variant='h6' style={{fontWeight:'700', color: '#4E4A57',}}>General info</Typography>
                <Divider style={{ width: '70%',marginBlock: '10px',}}/>
                <div style={{color: '#36205D'}}>
                <Typography variant='subtitle2' style={{fontWeight: 700}}>First Name : <span className={classes.span}> Hamza </span> </Typography>

                <Typography variant='subtitle2' style={{fontWeight: 700}}>Last Name :  <span  className={classes.span}> Nemer </span> </Typography>

                <Typography variant='subtitle2' style={{fontWeight: 700}}>Username :  <span  className={classes.span}> Hamza_Nemer </span> </Typography>

                <Typography variant='subtitle2' style={{fontWeight: 700}}>Password :  <span  className={classes.span}> 12345 </span></Typography>
                </div>
                </div>

            </div>
             
             <div style={{ width: '70%'}}>
             <Typography variant='h6' style={{fontWeight:'700', color: '#4E4A57',}}>Badges</Typography>
             <Divider style={{marginBlock: '10px',}}/>
             <div>
              <Tooltip title='speed badge because you gained speedly 150 points.'><img alt='' src={SpeedBadge} className={classes.img}/></Tooltip>
                <img alt='' src={OrganizeBadge} className={classes.img}/>
                <img alt='' src={CommunityBadge} className={classes.img}/>
                <img alt='' src={WinnerBadge} className={classes.img}/>
                <img alt='' src={TopBadge} className={classes.img}/>
                <img alt='' src={CompleteBadge} className={classes.img}/>
             </div>
            </div>

            </div>

            <div  id='rewardsPart' style={{padding: '0 0 0 50px',display: 'none', }}>
                
                  <RewardsPart/>
                
            </div>
          </Box>
        </Fade>

        </Modal>

    </div>
  )
}

export default ProfileModel;