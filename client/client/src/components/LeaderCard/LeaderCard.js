import React from 'react';
import { useSelector } from 'react-redux';

import { Paper, Typography, Avatar ,Grow} from '@material-ui/core';
import Fire from '../../images/fire.png';
import Clapping from '../../images/clapping.png';
import Cool from '../../images/cool.png';
import useStyles from './styles';



const LeaderCard = () => {

    const classes = useStyles();
    const leaders = useSelector((state) => state.user.users.sort((a, b) => b.level - a.level ));
   
    const color = ['#FFBE5D', '#00CEC9', '#E17055'];
    const emoji = [`${Fire}`, `${Cool}`, `${Clapping}`];

  return (
    <Grow in>
    <Paper style={{borderRadius: 15, backgroundColor: '#EDECEE',padding: '20px',}}>
       {
        leaders.map((user, i) => (
          (i < 3) &&
          <Paper className={classes.bar} key={i}>
          <div className={classes.spaces}>
              
              <div style={{color: '#333'}} className={classes.centered}>
               <div className={classes.number} style={{backgroundColor: `${color[i] || '#333'}`}}>{i+1}</div>
                <Avatar alt="" src={user.imageUrl} style={{width: 50, height: 50, border: '1px solid #36205D'}}>
                </Avatar>
                <div>
                <Typography variant='subtitle1' style={{fontWeight: 500}}>
                  {user.name}
                </Typography>
                <Typography variant='caption'  style={{color: '#36205D', fontWeight: 'bold'}} className={classes.centered}>
                  @{user.userName}
                </Typography>
                </div>
              </div>
              <div className={classes.centered}>
                  <span style={{color:`${color[i] || '#333'}`, fontWeight: '900'}}>{user.level}</span>
                  <img alt='' src={emoji[i]} style={{width:'20px', height: '20px'}}/>
              </div>
          </div>
      </Paper>
        ))
       }
    </Paper>
    </Grow>
  )
}

export default LeaderCard