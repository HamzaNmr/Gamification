
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, ButtonBase } from "@material-ui/core";
import './reward.css';
import RewardImage from '../../../images/reward.png';

import useStyles from './styles';


const rewards = [
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
    {image: RewardImage, title: 'offer', description:'50% sale on laptops', coins: 45},
]
const RewardsPart = () => {

    const classes = useStyles();
  return (
    <div style={{display: 'flex', width: '100%', height: 270, flexWrap: 'wrap', overflow: 'auto',}}>
        {
            rewards.map((reward) => (
                <Card className="card" style={{borderRadius: 10,}}>

                <div className='card-header'>
                   <img alt='' src={reward.image} style={{width: 50, height: 50, marginTop: '7px'}}/>
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