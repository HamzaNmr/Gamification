import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Avatar } from '@material-ui/core';

import useStyles from './styles';

import CommentsImage from '../../images/comments.png';

const comments = [
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
  {name: 'Hamza Nemr', description: 'Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, clan affiliation, patronage, parentage, adoption, and even physical characteristics (like red hair). Many of the modern surnames in the dictionary can be traced back to Britain and Ireland.'},
]

const Community = () => {

  const classes = useStyles();
  return (
    <div style={{margin: '77px 0 30px 0'}}>
      <Paper elevation={12} style={{backgroundColor: '#EBEAEC', height: '100vh', border: '3px solid #333', borderRadius: 15, padding: '2rem'}}>
       <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>

        <Grid item lg={8} md={6} sm={12}>
         <div className={classes.commentsInnerContainer}>
         {
            comments.map((comment) => (
              <div className={classes.styleComment}>
              <Avatar  alt='' src='https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360' style={{ width: '50px', height: '50px', border: '3px solid #333'}}>
                  
               </Avatar>
     
               <Typography gutterBottom variant='subtitle1'>
 
             <div>
             <strong style={{marginLeft:'12px', color: "#333"}} >{comment.name}</strong>
              
             <div className={classes.styleInnerComment}>
              {comment.description}
             </div>
             </div>
              
             </Typography>
           </div>
            ))
          }
         </div>
        </Grid>

        <Grid item lg={4} md={6} sm={12}>
        
        <Typography gutterBottom variant='h6' style={{display: 'flex', alignItems: 'center', gap: "14px", marginBottom: "20px", fontWeight: 900, color: '#333'}}>
            <img src={CommentsImage} alt='' style={{width: 30, height: 30}}/>
            Write a comment
        </Typography>
        <TextField fullWidth minRows={4} variant='filled' label='Comment' multiline className={classes.textField}/>
        <Button style={{marginTop: '10px'}} fullWidth  variant='contained' className={classes.commentButton}>Comment</Button>
       
        </Grid>

       </Grid>
      </Paper>
    </div>
  )
}

export default Community;