import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import Logo from '../../images/logoITMAX.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import useStyles from './styles';

const About = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop: '77px', display: 'flex', justifyContent: 'space-between',}}>

       <div>
       <Typography variant='h4' style={{fontWeight: 900, margin: '0 0 30px 30px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px'}}>
           <InfoOutlinedIcon style={{width: '50px', height: '50px'}}/> ABOUT
       </Typography>
       <img src={Logo} alt='' style={{backgroundColor: '#432874', borderRadius: 15, border: '3px solid #333', width: '33rem',}}/>
       <Paper className={classes.paperHero}>
       <ul>
        <li>comupter book Illustration by <a href="https://icons8.com/illustrations/author/XTPoH093lluQ">Viktoriya Belinio</a> from <a href="https://icons8.com/illustrations">Ouch!</a></li>
        <li>company : IT MAX</li>
        <li>
          Developers team : 
          <ul>
            <li>Ali Mansour</li>
            <li>Ali Al-Malla</li>
            <li>Fatima Mansour</li>
            <li>Kawthar Safa</li>
            <li>Hamza Nemer</li>
          </ul>
        </li>
       </ul>
       </Paper>
       </div>

       <div>
           
       </div>
    </div>
  )
}

export default About