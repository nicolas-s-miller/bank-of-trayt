import Box from '@mui/material/Box';
import NavigationItem from './NavigationItem';

const SubNavigation = () => (
  <Box
    display="flex"
    sx={{
      backgroundColor: "#f0f0f0",
      flexDirection: "column",
      height: "calc(100vh - 64px)",
      margin: "0px 0px -8px -8px",
      paddingLeft: "20px",
      paddingTop: "20px",
      rowGap: "20px",
    }}
  >
    <NavigationItem>Personal</NavigationItem>
    <NavigationItem>Small Business</NavigationItem>
    <NavigationItem>Wealth Management</NavigationItem>
    <NavigationItem>Business and Institutions</NavigationItem>
    <NavigationItem>About Us</NavigationItem>
  </Box>
);

export default SubNavigation;
