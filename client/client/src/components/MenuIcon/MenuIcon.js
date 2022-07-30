import React from 'react';

import useStyles from "./styles";
import { Box } from '@material-ui/core';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { VscMenu } from 'react-icons/vsc';


import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';



const MenuIcon = () => {

    const classes = useStyles();

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
                  <GroupsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <LightModeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>LeaderBoard</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <LightModeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Rewards</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <SettingsApplicationsIcon />
                  </ListItemIcon>
                  <ListItemText>Setting</ListItemText>
                </ListItemButton>
              </ListItem>
  
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <ExitToAppIcon sx={{color:'red'}} />
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