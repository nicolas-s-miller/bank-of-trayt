import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavigationItem from './NavigationItem';

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
      <NavigationItem>Sign In</NavigationItem>
      <NavigationItem>En Español</NavigationItem>
      <NavigationItem>Locations</NavigationItem>
      <NavigationItem>Contact Us</NavigationItem>
      <NavigationItem>Help</NavigationItem>
    </Toolbar>
  </AppBar>
);

export default Navigation;
