import React from 'react'
import { AppBar,Grid, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{mx: 5}}>Home</Typography>
          <Typography sx={{mx: 5}}>About</Typography>
          <Typography sx={{mx: 5}}>Services</Typography>
          <Typography sx={{mx: 5}}>Contact</Typography>
        </Toolbar>
      </AppBar>

    <Grid container spacing={3}>
      <Grid item xs>
        Some text here
      </Grid>
      <Grid item xs={6}>
      Some text here
      </Grid>
      <Grid item xs>
      Some text here
      </Grid>
    </Grid>

    </Container>
  )
}

export default App