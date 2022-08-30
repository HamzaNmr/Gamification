
import React, { useEffect } from 'react';
import { getRewards } from '../../../actions/rewards';
import { useDispatch, useSelector } from 'react-redux';

import { Card,CardContent,Typography} from "@material-ui/core";
import './reward.css';
// import RewardImage from '../../../images/reward1.png';
import CoinsAnime from '../../../images/coinsAnime.gif';

// import useStyles from './styles';




const RewardsPart = () => {

    // const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const currentId = user?.result?.id;
    const Myuser= useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);
    const rewardsArray = Myuser?.rewards || ['nothing'];
  
    const { rewards } = useSelector((state) => state.rewards);
    console.log(rewards, 'rewards');

    let finalRewards = rewards.filter(reward => rewardsArray.indexOf(reward._id) !== -1);

  return (
    <div style={{display: 'flex', width: '100%', height: 270, flexWrap: 'wrap', overflow: 'auto',}}>
        {
           ( rewardsArray[0] === 'nothing' ) 
           ?
           <div style={{width: '100%', height: '200px', display:'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column',}}>
            <img src={CoinsAnime} alt='' style={{width: 170, height: 170}}/>
            <Typography variant='body2'>
            You dont have any reward yet, so we recommended you to gain coins by visit the tasks part <br/>
             <span>Tasks page</span> then pay for you  a lot of rewards.
            </Typography>
            </div>
           :
            finalRewards.map((reward, i) => (


                <Card className="card" style={{borderRadius: 10, height: '10rem',}} key={i}>

                <div className='card-header'>
                   <img alt='' src={reward.photo} style={{width: 40, height: 40, marginTop: '9px'}}/>
                </div>
                
                <CardContent className="card-body" >
                  <Typography variant="body2" component="p" style={{ fontSize: '.8rem', color: '#482882'}}gutterBottom >{ reward.title }</Typography>
                </CardContent>
                
                </Card>
               
            
            ))
        }
    </div>
  )
}

export default RewardsPart