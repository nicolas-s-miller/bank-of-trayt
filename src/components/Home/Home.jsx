import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Enrollment from './Enrollment';

const Home = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);

  if (showEnrollment) {
    return <Enrollment />;
  }

  return (
    <>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          paddingTop: "75px"
        }}
      >
        <Typography
          component="h2"
          sx={{ color: "#004990" }}
          variant="h2"
        >
          Welcome to Bank of Trayt
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          paddingTop: "150px"
        }}
      >
        <Typography
          component="h3"
          sx={{ color: "#004990" }}
          variant="h3"
        >
          Initiate a new Direct Deposit to earn 5% for 36 Months!
        </Typography>
      </Box>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          paddingTop: "100px"
        }}
      >
        <Button
          onClick={() => setShowEnrollment(true)}
          sx={{
            backgroundColor: "#005CC5",
            padding: "15px 45px"
          }}
          variant="contained"
        >
          Learn More
        </Button>
      </Box>
    </>
  )
};

export default Home;
