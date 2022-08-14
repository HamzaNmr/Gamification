import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useStyles from "./styles";
import { Box } from '@material-ui/core';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { VscMenu } from 'react-icons/vsc';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';





const MenuIcon = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    
    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      navigate('/auth', { replace: true });

      setUser(null);
  }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                 

                  </ListItemIcon>
                  <ListItemText>Name</ListItemText>
                </ListItemButton>
              </ListItem>
  
          </List>
          <Divider />
          <List>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <OtherHousesOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <LeaderboardOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>LeaderBoard</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <EmojiEventsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Rewards</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <SettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Setting</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton onClick={logout}>
                  <ListItemIcon>
                   <MeetingRoomOutlinedIcon sx={{color:'red'}} />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            
          </List>
        </Box>
      );


  return (
    <div className={classes.displayed}>
        <VscMenu onClick={toggleDrawer('bottom', true)} style={{fontSize: '2rem'}}/>
        <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
          >
            {list('bottom')}
          </Drawer>
    </div>
  )
}

export default MenuIcon;