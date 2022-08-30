import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getMissions } from '../../actions/dailyMission';


import { Card, Paper, Typography, Button } from '@material-ui/core';
import Star from '../../images/favourites.png';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import emptyImage from '../../images/empty-folder.png';

import useStyles from './styles';

import AddModel from './AddModel/AddModel';

import { updateprofile } from '../../actions/user';
import { deleteMission } from '../../actions/dailyMission';
import { toast } from 'react-toastify';


const DailyCard = () => {
 
  const [noMission, setNoMission] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);

  const { missions, isLoading } = useSelector((state) => state.dailyMission);
  console.log(missions, isLoading);
  

  const CustomToast = () => {
    return(
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all'}}>
         <Typography variant='subtitle2'> One Daily Mission is complete <br/> +10 expereince
         <img src={Star} alt="" style={{width: '17px', height: '17px', marginInline: '9px'}}/>
         </Typography>
      </div>
    )
  }

  const notify = () => {
    toast(<CustomToast/>)
  }

  const userInfo = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
  const addBtn = () => {
      dispatch(updateprofile(currentId,{experience: userInfo?.experience + 10}));
      notify();
  }

  // useEffect(() => {
  //   missions.map((mission) => (
  //     (mission.creator === currentId) ? setNoMission([]) : setNoMission('nothing')
  //   ), [])
  // })
  // console.log(noMission)

  return (
    <div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginBottom: '30px',}}>
        <Typography variant='h5' style={{color: '#333', fontWeight: '900'}}>
            Daily missions
        </Typography>
        <AddModel/>
        </div>
<div style={{height: '300px',overflow: 'auto',}}>
  
{

( !missions.length) ?
<div>
  <img src={emptyImage} alt="" style={{width:'90px', height: '90px'}}/>
</div>
:
missions.map((mission, i) => (
 (mission.creator === currentId) &&
 <Paper elevation={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '20px 30px', backgroundColor: '#E9E8EA', borderRadius: 15, marginBottom: '20px', }} key={i}>
 <div style={{marginRight: '10px'}}>
 <Typography variant='h6' >
      {mission.title}
 </Typography>
   <Typography variant='body2' >
      {mission.motivation}
   </Typography>
 </div>

  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
  <Button className={classes.addButton} onClick={addBtn}>
    <DoneOutlineIcon style={{fontSize: '1.2rem'}}/>
  </Button>
  </div>
</Paper> 
))
}

</div>
    </div>
  )
}

export default DailyCard;