import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Interest from '../../../modules/Interest';

const generateRowValues = ({ amount, frequency, periods }) => {
  return periods.map((period) => {
    const { description, endDate, startDate } = period;
    return {
      description: Interest.describePeriod(description, endDate),
      ...Interest.calculatePeriod(Number(amount), frequency, startDate, endDate),
    };
  });
};

const InterestTable = ({ amount = 0, frequency, periods }) => {
  const rows = generateRowValues({ amount, frequency, periods });

  return (
    <TableContainer sx={{ marginBottom: "20px" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Period</TableCell>
            <TableCell>Deposits</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.description}>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.deposits}</TableCell>
              <TableCell align="right">{row.interest}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InterestTable;
