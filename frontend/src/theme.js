// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
        primary: '#EF4C1A',
        secondary: '#777777',
    },
    primary: {
        main: '#4E0573', // Your primary color
    },
    secondary: {
        main: '#620590',
    },
    background: {
      default: '#9c18df', // Background color for the app
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'orange',  
          borderRadius: '20px',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
