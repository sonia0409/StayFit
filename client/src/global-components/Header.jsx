import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function MenuAppBar() {
  const { auth, user, logout } = useContext(authContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const handleHomeButton = () => {
    console.log("Home button clicked!!")
    navigate("..")
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//material ui took inline styling only- figure out the ways to implement differently
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleHomeButton}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StayFit
          </Typography>
          {auth && (
            <div>

              <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Tired man"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSNIFSen-ODMRSzmOFJkfqBxejIsxvl2_6g&usqp=CAU"
                />

              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem divider={true} disabled={true}>User: { user.name }</MenuItem>
                <MenuItem divider={true} onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}