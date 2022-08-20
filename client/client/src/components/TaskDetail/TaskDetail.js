import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../actions/tasks';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import useStyles from './styles';
import './styles.css';
import Coin from '../../images/dollar.png';
import { Paper, Typography, Divider, CircularProgress, CardMedia, Grid, } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';

const TaskDetail = () => {

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

const checkAnswer = () => {
  if(task?.trueChoice === trueAnswer){
    console.log('correct');
    document.getElementById('btnAnswer').innerHTML = 'correct';
    document.getElementById('btnAnswer').style.backgroundColor = '#388E3C';
    setTrueAnswer('')
  }else{
    console.log('wrong')
    document.getElementById('btnAnswer').innerHTML = 'wrong';
    document.getElementById('btnAnswer').style.backgroundColor = '#D32F2F';
    setTrueAnswer('')
  }
}

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
        <div style={{marginLeft: '14px'}}>
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
                  <Paper elevation={6} key={i} className={classes.paper} 
                    onClick={() => {
                    setTrueAnswer(answer);
                    } }>
                    {answer}
                  </Paper>
                ))
              }
              <Button variant='contained' onClick={checkAnswer} style={{width:'85%', borderRadius: 15, backgroundColor: '#0288D1'}} id='btnAnswer'>Answer</Button>
            </div>
           </div>
           :
           null
        }
       </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div className={classes.descriptionPart}>
           <div>
           <Typography variant="h6">Description :</Typography>
            <Typography variant="body1" style={{fontSize: '.8rem', marginBlock: '30px'}}>{task?.description}</Typography>
           </div>
           <div>
           <Typography variant="h6">Coins :</Typography>
           <div className={classes.coin}>
            <img src={Coin} alt="" style={{width: '30px',}}/>
            <span>{task?.coin}</span>
           </div>
           </div>
           <div>
           <Typography variant="h6">Who complete this task:</Typography>
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', marginBlock: '30px'}} >
           <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
           </AvatarGroup>
           </div>
           </div>
           {task?.link &&
           <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end',}}>
           <Button variant='contained' color="success">Complete</Button>
           </div>
           }
          </div>
        </Grid>
      </Grid>
      </Paper>
    </div>
  )
}

export default TaskDetail