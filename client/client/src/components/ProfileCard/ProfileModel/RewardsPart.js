
import React from 'react';
import { Card,CardContent,Typography} from "@material-ui/core";
import './reward.css';
// import RewardImage from '../../../images/reward1.png';
import CoinsAnime from '../../../images/coinsAnime.gif';

// import useStyles from './styles';


// const rewardss = [
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
//     {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
// ]
const RewardsPart = () => {

    // const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const rewards = user?.result?.rewards || [];
  return (
    <div style={{display: 'flex', width: '100%', height: 270, flexWrap: 'wrap', overflow: 'auto',}}>
        {
           ( rewards?.length === 0 ) 
           ?
           <div style={{width: '100%', height: '200px', display:'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column',}}>
            <img src={CoinsAnime} alt='' style={{width: 170, height: 170}}/>
            <Typography variant='body2'>
            You dont have any reward yet, so we recommended you to gain coins by visit the tasks part <br/>
             <span>Tasks page</span> then pay for you  a lot of rewards.
            </Typography>
            </div>
           :
            rewards.map((reward, i) => (
                <Card className="card" style={{borderRadius: 10,}} key={i}>

                <div className='card-header'>
                   <img alt='' src={reward.image} style={{width: 40, height: 40, marginTop: '9px'}}/>
                </div>
                
                <CardContent className="card-body" >
                  <Typography variant="body2" component="p" style={{fontSize: '.7rem'}} gutterBottom >{ reward.description }</Typography>
                </CardContent>
                
                </Card>
            
            ))
        }
    </div>
  )
}

export default RewardsPart