import Grid from '@mui/material/Grid';
import Navigation from './components/Navigation/Navigation.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

// This is naively designed for desktop first. Ideally we'd have a more complex
// structure that shrinks the navigation and sidebar on mobile.
const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <Navigation />
    </Grid>
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>

      </Grid>
    </Grid>
  </Grid>
);

export default App;
