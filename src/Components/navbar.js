import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

  function Navbar() {
    return (
      <>
        <AppBar position="static" sx={{backgroundColor:'#0f0c29'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Voting App
            </Typography>
            <Button color="inherit" component={RouterLink} to="/Home">Home</Button>
            <Button color="inherit" component={RouterLink} to="/results">Results</Button>
            <Button color="inherit" component={RouterLink} to="/login">Login</Button>
            <Button color="inherit" component={RouterLink} to="/winner">Winner</Button>
          </Toolbar>
        </AppBar>
      </>
    );
  }
  
  export default Navbar;
  