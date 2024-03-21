import { useState } from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InterestCalculatorDatepicker from './InterestCalculatorDatepicker';
import InterestCalculatorForm from './InterestCalculatorForm';
import InterestTable from './InterestTable';

const TODAY = dayjs();
const ILLUSTRATION_PERIODS = [
  { description: '1 yr', endDate: TODAY.add(1, 'y'), startDate: TODAY },
  { description: '2 yrs', endDate: TODAY.add(2, 'y'), startDate: TODAY },
  { description: '3 yrs', endDate: TODAY.add(3, 'y'), startDate: TODAY },
  { description: '5 yrs', endDate: TODAY.add(5, 'y'), startDate: TODAY },
  { description: '10 yrs', endDate: TODAY.add(10, 'y'), startDate: TODAY },
]

const InterestCalculator = ({ onSubmit }) => {
  const [amount, setAmount] = useState(0);
  const [frequency, setFrequency] = useState('once')

  const handleAmountChange = e => setAmount(e.target.value);

  const handleFrequencyChange = e => setFrequency(e.target.value);

  const handleSubmit = () => onSubmit(amount, frequency);

  return (
    <>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          marginBottom: "50px",
          paddingTop: "75px"
        }}
      >
        <Typography component="h3" sx={{ color: "#004990" }} variant="h3">
          New Direct Deposit Enrollment
        </Typography>
      </Box>
      <Grid container>
        <Grid
          container
          item
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          <Grid item xs={10}>
            <Box>
              <Typography
                component="h5"
                sx={{ color: "#004990", marginBottom: "20px" }}
                variant="h5"
              >
                Part 1: Make a Plan
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          spacing={2}
        >
          <Grid
            item
            sx={{
              backgroundColor: "#f3f3f3",
              flexDirection: "column",
              gap: "25px",
              minHeight: "500px",
              padding: "20px"
            }}
            xs={5}
          >
            <InterestCalculatorForm
              amount={amount}
              frequency={frequency}
              onAmountChange={handleAmountChange}
              onFrequencyChange={handleFrequencyChange}
            />
            <InterestTable
              amount={amount}
              frequency={frequency}
              periods={ILLUSTRATION_PERIODS}
            />
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "#f3f3f3",
              flexDirection: "column",
              gap: "25px",
              minHeight: "500px",
              padding: "20px"
            }}
            xs={5}
          >
            <InterestCalculatorDatepicker
              amount={amount}
              frequency={frequency}
            />
            <Box
              display="flex"
              sx={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#005CC5",
                  padding: "15px 45px",
                }}
                variant="contained"
              >
                Enroll
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default InterestCalculator;
