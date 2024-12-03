import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
        primary: '#000000', // Black for primary text (paragraphs and the rest of the text)
        secondary: '#777777', // Optional: If needed for secondary text
    },
    primary: {
        main: '#FDF5E2', // Title color
    },
    secondary: {
        main: '#FDF5E2', // Keeping this as it is unless explicitly changed
    },
    background: {
      default: '#FDF5E2', // Updated background color for the app
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
