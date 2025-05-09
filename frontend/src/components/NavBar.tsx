import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavBarProps {
  toggleMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleMenu }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={toggleMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UrbanPulse AI
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/recommender">Recommender</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;