import { useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InterestTable from './InterestTable';

const TODAY = dayjs();
const ILLUSTRATION_PERIOD = { description: 'Custom', startDate: TODAY };

const InterestCalculatorDatepicker = ({ amount = 0, frequency }) => {
  const [periods, setPeriods] = useState([]);

  const handleDateChange = (value) => {
    if (!value || !value.isValid()) {
      setPeriods([]);
    } else {
      setPeriods([{ ...ILLUSTRATION_PERIOD, endDate: value }]);
    }
  }

  return (
    <Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography component="p" variant="p">
          Have a specific date in mind? Choose a date below to see what
          your deposit amount and frequency can do.
        </Typography>
      </Box>
      <DatePicker
        minDate={TODAY}
        onChange={handleDateChange}
        sx={{ width: "100%" }}
      />
      <InterestTable
        amount={amount}
        frequency={frequency}
        periods={periods}
      />
    </Box>
  )
};

export default InterestCalculatorDatepicker;
