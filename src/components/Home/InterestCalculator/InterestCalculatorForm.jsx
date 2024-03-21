import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FREQUENCIES = [
  { label: 'Once a month', value: 'once' },
  { label: 'Twice a month', value: 'twice' },
];

const InterestCalculatorForm = ({
  amount,
  frequency,
  onAmountChange,
  onFrequencyChange,
}) => (
  <Box>
    <Box sx={{ marginBottom: "20px" }}>
      <Typography component="p" variant="p">
        Our interest calculator lets you see what a Trayt account can do for you.
        Enter a deposit amount and frequency to get started.
      </Typography>
    </Box>
    <TextField
      id="amount"
      helperText="The amount of each deposit."
      InputProps={{ startAdornment: (
        <InputAdornment position="start">$</InputAdornment>
      )}}
      fullWidth
      label="Amount"
      onChange={onAmountChange}
      required
      sx={{ marginBottom: "20px" }}
      value={amount}
    />
    <TextField
      id="frequency"
      helperText="The number of deposits made each month. Deposits are made on the 1st and, if applicable, the 15th of each month."
      fullWidth
      label="Frequency"
      onChange={onFrequencyChange}
      required
      select
      sx={{ marginBottom: "20px" }}
      value={frequency}
    >
      {FREQUENCIES.map(frequency => (
        <MenuItem key={frequency.value} value={frequency.value}>
          {frequency.label}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default InterestCalculatorForm;
