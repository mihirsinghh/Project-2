// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
        primary: '#FFA500',
        secondary: '#777777',
    },
    primary: {
        main: '#512DA8',
    },
    secondary: {
        main: '#6200ea', // Your primary color
    },
    background: {
      default: '#f5f5f5', // Background color for the app
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
