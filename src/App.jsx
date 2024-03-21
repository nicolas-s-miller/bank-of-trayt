import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Grid from '@mui/material/Grid';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SubNavigation from './components/Navigation/SubNavigation';

// TODO: Change design to mobile-first by creating collapsed versions of Navigation
// and Sidebar.
// TODO: Add routing for the navigation items and the direct deposit flow.
const App = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <SubNavigation />
        </Grid>
        <Grid item xs={10}>
          <Home />
        </Grid>
      </Grid>
    </Grid>
  </LocalizationProvider>
);

export default App;
