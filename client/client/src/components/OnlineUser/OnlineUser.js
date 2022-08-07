import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Paper } from '@material-ui/core';
import { Typography } from '@mui/material';

import OnlineImage from '../../images/video-chat.png';

const OnlineUser = () => {
  return (
    <div style={{marginTop: '30px'}}>
   <Typography gutterBottom variant='h6' style={{display: 'flex', alignItems: 'center', gap: "14px", marginBottom: "20px", fontWeight: 900, color: '#333'}}>
    <img src={OnlineImage} alt='' style={{width: 40, height: 40}}/>
    Online employees
   </Typography>
    <Paper style={{ cursor: 'pointer',padding: '10px 20px', borderRadius: 20, display:'flex', alignItems: 'center', justifyContent:'center', backgroundColor: "#9687DB",}}>
     <AvatarGroup total={8}>
      <Avatar alt="Remy Sharp" src="https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png" />
      <Avatar alt="Travis Howard" src="https://www.php.net/images/meta-image.png" />
      <Avatar alt="Agnes Walker" src="https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png" />
      <Avatar alt="Trevor Henderson" src="https://oktob.io/storage/20309/top11.png" />
     </AvatarGroup>
    </Paper>
    </div>
  )
}

export default OnlineUser;