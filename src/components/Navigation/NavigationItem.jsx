import Typography from '@mui/material/Typography';

const NavigationItem = ({ children }) => (
  <Typography component="div" variant="subtitle1">
    {children}
  </Typography>
);

export default NavigationItem;
