import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../actions/tasks';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import useStyles from './styles';
import './styles.css';
import Coin from '../../images/dollar.png';
import { Paper, Typography, Divider, CircularProgress, CardMedia, Grid, Box } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DoneImage from '../../images/done.png';

import InfoModal from './InfoModal';


import { completeTask } from '../../actions/tasks';
import { updateprofile } from '../../actions/user';

const TaskDetail = () => {

  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = user?.result?.id;
  const userInfo = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
  const { task , isLoading } = useSelector((state) => state.tasks);
  const [trueAnswer, setTrueAnswer] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTask(id));
  },[id]);

  console.log(task, isLoading);

let answers;
if(task){
  answers = task?.falseChoice.split(',').concat(task?.trueChoice);
}

const [completes,setCompletes] = useState(task?.complete);
console.log(completes);
const userId = user?.result?.id 
const hasCompletedTask = task?.complete.find((completeId) => completeId === userId);


const checkAnswer = () => {
  if(task?.trueChoice === trueAnswer){
    console.log('correct');
    dispatch(completeTask(task._id));
    if(hasCompletedTask){
      setCompletes(task.complete.filter((id) => id !== userId));
    }else{
      setCompletes([...task.complete, userId]);
      dispatch(updateprofile(currentId,{coins: userInfo?.coins + task?.coin, experience: userInfo?.experience + 10}));
    }
    navigate('/tasks', {replace: true});
    setTrueAnswer('');
  }else{
    console.log('wrong')
    document.getElementById('btnAnswer').innerHTML = 'wrong';
    document.getElementById('btnAnswer').style.backgroundColor = '#D32F2F';
    setTrueAnswer('')
  }
}

const completeVideo = () => {
  dispatch(completeTask(task._id));
  if(hasCompletedTask){
    setCompletes(task.complete.filter((id) => id !== userId));
  }else{
    setCompletes([...task.complete, userId]);
    dispatch(updateprofile(currentId,{coins: userInfo?.coins + task?.coin, experience: userInfo?.experience + 10}));
    navigate('/tasks', {replace: true});
  }
}


const ButtonComplete = () => {
  if(task?.complete?.length > 0) {
      return task.complete.find((complete) => complete === userId)
      ?(
        <Box>
         <Typography variant='body1' style={{fontSize: '.8rem', display: 'flex', alignItems: 'center', gap:'14px'}}>
          <img src={DoneImage} alt='' style={{width: 20, height: 20}}/>
          DONE! Congrats you have finished this task successfuly.
         </Typography>
         <Typography variant='body2' style={{fontSize: '.8rem'}}>
         Take another one and learn more then gain more coins for reach the Top level.
         </Typography>
        </Box>
          
      ) : (
        task?.question ? <Button variant='contained' onClick={checkAnswer} style={{width:'85%',borderRadius: 15, backgroundColor: '#0288D1'}} id='btnAnswer'>Answer</Button> :
        <Button variant='contained' color="success" onClick={completeVideo}>Complete</Button>
      );
  }
  return  task?.question ? <Button variant='contained' onClick={checkAnswer} style={{ width:'85%',borderRadius: 15, backgroundColor: '#0288D1'}} id='btnAnswer'>Answer</Button> :
  <Button variant='contained' color="success" onClick={completeVideo}>Complete</Button>
};

  if(isLoading){
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
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
      </Paper>
    );
  }
  
  return (
    <div style={{marginTop: '77px'}}>
      <Paper style={{backgroundColor: '#EBEAEC', border: '3px solid #333', borderRadius: 15, padding: '2rem', height: '77vh', color: '#432874'}}elevation={6}>
      <Grid container spacing={3}>
        <Grid item lg={6} sm={12}>
        <div>
        <div style={{marginLeft: '14px',}}>
        <Typography variant='h5' style={{fontWeight: 900}}>{task?.title}</Typography>
        <Typography variant="body1">{moment(task?.createdAt).fromNow()}</Typography>
        </div>
        {
          task?.link
           ?
          <iframe width="700" height="450" src={task?.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          style={{border:'none', borderRadius: 15, marginTop: '30px'}}></iframe>
           :
           task?.question
           ?
           <div style={{margin: '30px 0 0 14px',}}>
            <Typography variant='h5'>Choose the correct answer</Typography>
            <div style={{marginBlock: '30px'}}>
           <Paper elevation={6} className={classes.paper}>
           <Typography variant="h6">{task?.question}</Typography>
           </Paper>
           
              {
                answers.map((answer,i) => (
                  <Paper elevation={6} key={i} className={classes.paperMap} 
                    onClick={() => {
                    setTrueAnswer(answer);
                    } }>
                    {answer}
                  </Paper>
                ))
              }
              
              <ButtonComplete/>
             
            </div>
           </div>
           :
           null
        }
       </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div style={{display:'flex',justifyContent: 'end', alignItems: 'center',marginRight: '30px'}}>
            <InfoModal task={task}/>
          </div>
          <div className={classes.descriptionPart}>
           <div>
           <Typography variant="h6" style={{fontWeight: 900}}>Description :</Typography>
            <Typography variant="body1" style={{fontSize: '.8rem', marginBlock: '30px'}}>{task?.description}</Typography>
           </div>
           <div>
           <Typography variant="h6" style={{fontWeight: 900}}>Coins :</Typography>
           <div className={classes.coin}>
            <img src={Coin} alt="" style={{width: '30px',}}/>
            <span>{task?.coin}</span>
           </div>
           </div>
           <div>
           <Typography variant="h6" style={{fontWeight: 900}}>Who complete this task:</Typography>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start',marginBlock: '30px', width: '100%', }}>
          
           <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
           </AvatarGroup>
        
           </div>
           </div>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end',marginBlock: '30px', width: '100%', }}>
           {task?.link &&
          <ButtonComplete/>
           } 
           </div>
          </div>
        </Grid>
      </Grid>
      </Paper>
    </div>
  )
}

export default TaskDetail