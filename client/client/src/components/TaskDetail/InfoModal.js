import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import MachineAnime from '../../images/machineAnime.gif'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 7,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const InfoModal = ({ task }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="Help">
  <IconButton onClick={handleOpen} >
  <HelpOutlineOutlinedIcon/>
  </IconButton>
</Tooltip>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src={MachineAnime} alt='' style={{width: 200, height: 200}}/>
          <div style={{textAlign: 'left'}}>
          <Typography variant='body1' style={{fontWeight: 700}}>
            Dear,
          </Typography>
            {
              !task.link 
              ?
              <div>
                <Typography variant='body2' style={{fontSize:'.8rem', color: '#333', marginTop: '10px'}}>
                please read the question in the left side and choose your answer then click on the ANSWER button. If your answer is right we will navigate you to the tasks page again and sure you will get your coins.
                </Typography>
                <br/>
                Thank you
              </div>
              :
              <div>
              <Typography variant='body2' style={{fontSize:'.8rem', color: '#333', marginTop: '10px'}}>
              please watch this video, and we recommended you after watching this tutorial go to find your question for apply what you learned here.
              Finally, you'll click on complete to gain your coins.
              </Typography>
              <br/>
              Thank you
            </div>
              
            }
          
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default InfoModal