import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SideItem = ({ children }) => (
  <Typography variant="subtitle1" component="div">
    {children}
  </Typography>

)

const Sidebar = () => (
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
    <SideItem>Personal</SideItem>
    <SideItem>Small Business</SideItem>
    <SideItem>Wealth Management</SideItem>
    <SideItem>Business and Institutions</SideItem>
    <SideItem>About Us</SideItem>
  </Box>
);

export default Sidebar;
