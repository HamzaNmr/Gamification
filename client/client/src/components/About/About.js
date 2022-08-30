import { Typography } from '@material-ui/core'
import React from 'react'

const About = () => {
  return (
    <div style={{marginTop: '77px'}}>

        <Typography variant='h4' style={{fontWeight: 900, marginBottom: '30px'}}>
            ABOUT
        </Typography>

       <ul>
        <li>comupter book Illustration by <a href="https://icons8.com/illustrations/author/XTPoH093lluQ">Viktoriya Belinio</a> from <a href="https://icons8.com/illustrations">Ouch!</a></li>
        <li>Material UI</li>
        <li>MERN</li>
       </ul>
    </div>
  )
}

export default About