import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, deleteMission } from '../../actions/dailyMission';

import { Card, Paper, Typography, Button, Grow } from '@material-ui/core';
import Star from '../../images/favourites.png';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import fileAnime from '../../images/fileAnime.gif';
import goalImage from '../../images/goalll.png';
import useStyles from './styles';

import AddModel from './AddModel/AddModel';

import { updateprofile } from '../../actions/user';
import { toast } from 'react-toastify';

const Page = () => {
  const [noMission, setNoMission] = useState([]);
  const classes = useStyles();
 const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = (user?.result?.id || user?.result?._id);

   useEffect(() => {
    dispatch(getMissions());
}, [currentId, dispatch]);

const { missions, isLoading } = useSelector((state) => state.dailyMission);



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
  //   ), [currentId])
  // })
  // console.log(noMission)

  return (
    <Grow in>
    <div style={{margin: '77px 0 30px 0'}}>
     <Paper elevation={12} className={classes.paperHero}>
     <div style={{display: 'flex', alignItems: 'center', margin: '0 0 30px 14px'}}>
     <img src={goalImage} alt="" className={classes.image}/>
      <Typography variant='h4' style={{fontWeight: 700, marginLeft:'30px', color: '#333'}}>Daily Missions</Typography>
     </div>
      {
        
       (!missions.length) ? 

        <div style={{width: '100%', heigh: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',}}>
           <img src={fileAnime} alt='' style={{width: '300px', height: '300px'}}/>
           <Typography variant='body2' style={{color: '#432874',}}>
            Nothing yet in you Archive. You can go to create your Daily Missions in the home page.
           </Typography>
       </div>
       :
        missions.map((mission, i) => (
          (mission.creator === currentId) &&
          <Paper elevation={6} className={classes.spaces} key={i}>
          <div>
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
           <Button className={classes.deleteButton} onClick={() => dispatch(deleteMission(mission._id))} >
             <DeleteForeverIcon style={{fontSize: '1.2rem'}}/>
           </Button>
           </div>
        </Paper> 
        
        ))
      }
      </Paper>
    </div>
    </Grow>
  )
}

export default Page