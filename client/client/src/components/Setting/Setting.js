import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { VscAccount} from "react-icons/vsc";
import { Typography, Avatar} from '@mui/material';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import useStyles from './styles';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    width: '7rem',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Notfication = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const logout = () => {

    dispatch({ type: 'LOGOUT' });

    navigate('/auth', { replace: true });

}

  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const currentId = user?.result?.id;
  const userInfo = useSelector((state) => currentId ? state.user.users.find((user) => user._id === currentId) : null);

  return (
    <div style={{marginInline: '12px', display: 'flex', alignItems: 'center'}}>
     
       <VscAccount className={classes.icons}
       id="demo-customized-button"
       aria-controls={open ? 'demo-customized-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       variant="contained"
       disableelevation= 'true'
       onClick={handleClick}
       />

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
        <Avatar alt={userInfo?.name} src={userInfo?.imageUrl} style={{width: '30px', height: '30px',borderRadius: 15, border:"1px solid #9687DB", marginRight: '5px'}} className={classes.avatar}>
                     <Typography variant='h1'>{userInfo?.name.charAt(0)}</Typography>
        </Avatar>
         <Typography variant='subtitle1'>
         <span>{userInfo?.firstName}</span>
         <span style={{marginLeft: '5px'}}>{userInfo?.lastName}</span>
         </Typography>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={logout} disableRipple>
          <MeetingRoomOutlinedIcon style={{color:'red'}} />
          LOGOUT
        </MenuItem>

        <MenuItem onClick={() => navigate('/About',{replace: true})} disableRipple>
          <InfoOutlinedIcon />
          About
        </MenuItem>
        
      </StyledMenu>
    </div>
  );
}

export default Notfication;
