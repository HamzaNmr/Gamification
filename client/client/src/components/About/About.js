import { Typography } from '@material-ui/core'
import React from 'react'

const About = () => {
  return (
    <div style={{marginTop: '77px'}}>

       <div>
       <Typography variant='h4' style={{fontWeight: 900, margin: '0 0 30px 30px', color: '#333'}}>
            ABOUT
        </Typography>

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
       </div>

       <div>

       </div>
    </div>
  )
}

export default About