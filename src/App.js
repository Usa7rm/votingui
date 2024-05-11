import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Winner from './Pages/winner';
import Results from './Pages/Results';
import Navbar from './Components/navbar';


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



function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </Router>
  );
}

export default App;
