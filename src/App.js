
import MyRoute from './components/common/header/MyRoute';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function App() {

  return (
    <>
      <Grid container spacing={2}>

        <Grid item xs={2}></Grid>

        <Grid item xs={8}>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >

            <MyRoute />

          </Box>
          
        </Grid>

        <Grid item xs={2}></Grid>

      </Grid>
    </>
  );
}

export default App;
