import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';


import useStyles from './styles';
import { Typography, TextField} from '@material-ui/core';

import Note from '../../../images/notes.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  backgroundColor: '#ECEBED',
  boxShadow: 24,
  borderRadius: '15px',
};

const AddModel = () => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button variant='contained' onClick={handleOpen} className={classes.addTask} sx={{
           backgroundColor:'#333',
           borderRadius: 3,
           transition: '.5s ease-out',
           '&:hover':{
               backgroundColor:'#333',
               transform: 'scale(1.03)',
           }
        }}>
          Add task
        </Button>

        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <div className={classes.header}>
             <Typography variant='subtitle1' style={{fontWeight: 700, display: 'flex', alignItems: 'center',gap: 5, marginBottom: '10px',}}>
              <img alt='' src={Note} style={{width: 30, height: 30}}/>
              Create Task</Typography>

             <Typography variant='body2' style={{color:'#9687DB'}}>
              Create your own daily task and gain more experience for reach the next level and be the best.
            </Typography>
           </div>
          
           <div style={{marginTop: '20px', padding: '10px 30px'}}>
             <TextField name="title" label="Title" variant="filled" fullWidth required style={{marginBottom:'20px'}}/>
             <TextField name="motivation" label="Motivation" variant="filled"  helperText="Motivate yourself by writing small letter." fullWidth/>
           </div>
           <div style={{width: '100%', display: 'flex',justifyContent: 'end',}}>
            <Button variant='contained' sx={{marginRight: '30px', backgroundColor: '#6133B4', fontWeight: 500,'&:hover':{backgroundColor: '#6133B4'}}}>
              Create
            </Button>
           </div>
          </Box>
        </Fade>
        </Modal>
    </div>
  )
}

export default AddModel;