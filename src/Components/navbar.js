import React from 'react';
import { AppBar, Toolbar, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
const theme = createTheme({
    palette: {
      primary: {
        main: '#302b63', // Indigo shade as the primary color
      },
      secondary: {
        main: '#24243e', // Dark blue for secondary actions
      },
      background: {
        default: '#0f0c29', // Deep violet for the overall background
      },
      text: {
        primary: '#ffffff', // White text for clarity
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(45deg, #0f0c29, #302b63)', // Gradient background
          }
        }
      },
    },
  });
  function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Voting App
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/results">Results</Button>
            <Button color="inherit" component={RouterLink} to="/login">Login</Button>
            <Button color="inherit" component={RouterLink} to="/winner">Winner</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Navbar;
  