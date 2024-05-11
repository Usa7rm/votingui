import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)', // Dark background for the page
      },
      text: {
        primary: '#1e2c32',
        secondary: '#ced1d2', // Muted tone for the table headers
      },
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: '#002c32', // Slightly darker background for headers
            color: '#CCCCCC', // Light gray text for readability
          },
          body: {
            fontSize: 14,
          },
          root: {
            padding: '16px', // Ample padding for spaciousness
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:nth-of-type(odd)': {
              backgroundColor: '#F7F7F7', // Light gray for alternate rows
            },
            '&:nth-of-type(even)': {
              backgroundColor: '#FFFFFF', // White for alternate rows
            },
          },
        },
      },
    },
  });


  function ResultsPage() {
    // Sample data for the results table
    const results = [
      { name: "Alice Johnson", id: "123", votes: 230 },
      { name: "Bob Smith", id: "456", votes: 150 },
      { name: "Carol White", id: "789", votes: 185 },
    ];
  
    return (
      <ThemeProvider theme={theme}>
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh" 
         sx={{ flexGrow: 1, background: theme.palette.background.default, p: 3 }}>
          <Typography variant="h3" component="h1" color="text.secondary" gutterBottom sx={{ textAlign: 'center' }}>
            Results
          </Typography>
          
          <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="right">Votes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="right">{row.votes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    );
  }
  
  export default ResultsPage;
  
