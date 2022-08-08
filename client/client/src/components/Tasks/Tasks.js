import { Grid, Grow, Paper, Typography } from '@mui/material';
import React from 'react';
import Task from './Task/Task';
import TaskDetail from '../TaskDetail/TaskDetail';
import AdviceImage from '../../images/advice1.png';

import './styles.css';

const Tasks = () => {
  return (
    <Grow in>
     <div style={{margin: '77px 0 30px 0'}}>
        <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>

            <Grid item lg={12} xs={12}>
          
              <Paper style={{backgroundColor: '#432874', padding: '20px 30px', borderRadius: 15, color: 'white'}}>
                <Typography variant='h4' style={{display: 'flex', alignItems: 'center',}}>
                  <img alt='' src={AdviceImage} style={{width: 70, heigth: 70, marginRight: '14px'}}/>
                  Advice  <span style={{fontSize: '1.2rem', marginLeft: '30px'}} className='adviceText'>Try to complete the tutorials video then go to answer on questions</span>
                </Typography>
              </Paper>
           
            </Grid>

            <Grid item lg={12} md={6} sm={12} xs={12}>
                <Paper style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '30px',
              backgroundColor: '#EBEAEC', border: '3px solid #333', borderRadius: 15, padding: '2rem'}}>
                  <Task/>
                </Paper>
            </Grid>

            

        </Grid>
        
    </div>
    </Grow>
  
  )
}

export default Tasks