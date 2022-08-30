import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import useStyles from './styles.js';



const ThreeDEarth = () => {
    const classes = useStyles();
    const navigate = useNavigate();

  return (
    <div style={{textAlign: 'center', marginRight:' 14rem'}} className={classes.container}>
        <Typography variant='h6' style={{fontWeight: 700, color: 'white'}}>
            Communicate <span style={{fontSize:'2rem', marginInline: '1rem'}}>&</span> Win
        </Typography>
        <Typography variant='body2' style={{color: '#9687DB'}}>
            Dive into community section and meet your freinds, <br/>
             share ideas and grow up with a lot of points.
        </Typography>
        <Button variant='contained' style={{
            backgroundColor: '#9687DB',
            color: 'white',
            marginTop: '2rem',
        }} onClick={() => navigate('/community', {replae: true})}>
            community
        </Button>
    </div>
  )
}

export default ThreeDEarth