import React from 'react';

import { Paper, Typography, Avatar ,Grow} from '@material-ui/core';
import Fire from '../../images/fire.png';
import Clapping from '../../images/clapping.png';
import Cool from '../../images/cool.png';
import useStyles from './styles';



const LeaderCard = () => {

    const classes = useStyles();

    const leaders = [
      {name: "Ali al-Malla", username: "Ali1234_h75gg", level: 120, color: '#FFBE5D', rank: 1, emoji: `${Fire}`},
      {name: "Ali Mansour", username: "ALI_ITACHI_13", level: 105, color: '#00CEC9', rank: 2, emoji: `${Cool}`},
      {name: "Kawthar Safa", username: "Abou_ali_safa", level: 100, color: '#E17055', rank: 3, emoji:  `${Clapping}`},
    ];


  return (
    <Grow in>
    <Paper style={{borderRadius: 15, backgroundColor: '#EDECEE',padding: '20px',}}>
       {
        leaders.map((user) => (
          <Paper className={classes.bar}>
          <div style={{display: 'flex', alignItems:'center',gap: '30px'}}>
              <div className={classes.number} style={{backgroundColor: `${user.color}`}}>{user.rank}</div>
              <div style={{color: '#333'}} className={classes.centered}>
                <Avatar alt="" src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360' style={{width: 50, height: 50, border: '1px solid #36205D'}}>
                </Avatar>
                <div>
                <Typography variant='subtitle1' style={{fontWeight: 500}}>
                  {user.name}
                </Typography>
                <Typography variant='caption'  style={{color: '#36205D', fontWeight: 'bold'}} className={classes.centered}>
                  @{user.username}
                </Typography>
                </div>
              </div>
              <div className={classes.centered}>
                  <span style={{color:`${user.color}`, fontWeight: '900'}}>{user.level}</span>
                  <img alt='' src={user.emoji} style={{width:'20px', height: '20px'}}/>
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