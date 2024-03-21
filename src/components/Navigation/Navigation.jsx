import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavItem = ({ children }) => (
  <Typography variant="subtitle1" component="div">
    {children}
  </Typography>
);

const Navigation = () => (
  <AppBar
    elevation={0}
    position="static"
    sx={{
      backgroundColor: "#004990",
      margin: "-8px -8px 0px -8px",
      width: "calc(100% + 16px)"
    }}
  >
    <Toolbar sx={{ gap: "20px", justifyContent: "flex-end" }}>
      <NavItem>Sign In</NavItem>
      <NavItem>En Español</NavItem>
      <NavItem>Locations</NavItem>
      <NavItem>Contact Us</NavItem>
      <NavItem>Help</NavItem>
    </Toolbar>
  </AppBar>
);

export default Navigation;
