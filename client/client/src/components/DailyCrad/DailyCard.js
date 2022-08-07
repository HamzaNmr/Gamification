import React from 'react';
import { Card, Paper, Typography, Button } from '@material-ui/core';
import AddImage from '../../images/swordsman.png';

import useStyles from './styles';

import AddModel from './AddModel/AddModel';

const DailyCard = () => {

    const classes = useStyles();
    
    const daily = [
      {Title: 'I got my work on the time.', description:"increase your experience's points", count: 1},
      {Title: 'I checked my Email box.', description:"increase your experience's points", count: 2},
    ];

   

  return (
    <div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginBottom: '30px',}}>
        <Typography variant='h5' style={{color: '#333', fontWeight: '900'}}>
            Daily missions
        </Typography>
        <AddModel/>
        </div>

       {
        daily.map((task, i) => (
          <Paper style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '20px 30px', backgroundColor: '#E9E8EA', borderRadius: 15, marginBottom: '20px', }} key={i}>
          <div>
          <Typography variant='h6' >
               {task.Title}
          </Typography>
            <Typography variant='body2' >
               {task.description}
            </Typography>
          </div>
    
           <div>
           <div className={classes.addButton}>
            <span style={{transform: 'rotate(-45deg)',}}>+{task.count}</span>
           </div>
           </div>
        </Paper>
        ))
       }

    </div>
  )
}

export default DailyCard;