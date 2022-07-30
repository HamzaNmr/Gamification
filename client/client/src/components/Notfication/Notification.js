import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { VscBell } from "react-icons/vsc";
import { Typography } from '@mui/material';

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
    width: '25rem',
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{marginInline: '12px', display: 'flex', alignItems: 'center'}}>
     
       <VscBell
       id="demo-customized-button"
       aria-controls={open ? 'demo-customized-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       variant="contained"
       disableElevation
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 30px' }}>
         <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>Notification</Typography>
         <Typography variant='subtitle2' style={{color: 'GRAY'}}>Dimiss all</Typography>
        </div>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
            Items
        </MenuItem>
        
      </StyledMenu>
    </div>
  );
}

export default Notfication;
