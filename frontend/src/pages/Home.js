import React from "react";
import {Box, TextField, Typography, Button} from '@mui/material';
import {useTheme} from '@mui/material/styles';

const Home = () => {

    const theme = useTheme();

    return (
    <Box
        sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.secondary.main,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.text.primary,
        }}
    >
        <TextField
            placeholder="Type to search for a book by title or author"
            sx={{
              backgroundColor: theme.palette.primary.main, 
              borderRadius: 5,
            }}
        >
        </TextField>

    </Box>
    
)};

export default Home;
