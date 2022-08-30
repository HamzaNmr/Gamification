import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {Grid, Paper, Typography, TextField, Button, Avatar, Grow } from '@material-ui/core';
import useStyles from './styles';


import CommentsImage from '../../images/comments.png';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';
import { getGroup, commentGroup } from '../../actions/community';

const Comment = ({ group }) => {
    
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

    const [comments,setComments] = useState(group?.comments);
    const [comment,setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));

    const commentsRef = useRef();
   
    const handleClick = async () => {
      const finalComment = `${user.result.name}: ${comment}`;
      const newComments = await dispatch(commentGroup(finalComment, group._id));
      setComments(newComments);
      setComment('');

      commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div>
         <div className={classes.commentsInnerContainer}>
           {
              comments.map((comment, i) => (
                
                <div key={i}>
                <div className={classes.styleComment} key={i}>
  
                <Avatar  alt={comment.split(': ')[0]} style={{ width: '40px', height: '40px', border: '3px solid #333'}}>
                {comment.split(': ')[0].charAt(0)}
                </Avatar>
       
               <Typography gutterBottom variant='subtitle1'>
   
               <div className={classes.styleInnerComment}>
               <strong style={{ color: "#333",}} >{comment.split(': ')[0]}</strong> <br/>
               {comment.split(': ')[1]}
               </div>
                
                
               </Typography>
               </div>
                </div>
               
              ))
            }
            <div ref={commentsRef} />
           </div>

           <div className={classes.commentField}>
        <Typography gutterBottom variant='h6' style={{display: 'flex', alignItems: 'center', gap: "14px", marginBottom: "20px", fontWeight: 900, color: '#333'}}>
            <img src={CommentsImage} alt='' style={{width: 30, height: 30}}/>
            Write a comment
        </Typography>
        <TextField fullWidth minRows={4} variant='filled' label='Comment' multiline className={classes.textField} value={comment}
          onChange={(e) => setComment(e.target.value)}/>
        <Button style={{marginTop: '10px'}} fullWidth  variant='contained' className={classes.commentButton} onClick={handleClick}>Comment</Button>
        </div>
    </div>
  )
}

export default Comment