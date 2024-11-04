import React from "react";
import {Box, TextField, IconButton} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

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
        <Box
            sx = {{
                display: 'flex',
                direction: 'row',
                alignItems: 'center',
            }}
        >
            <IconButton
                sx={{ marginLeft: 1 }}
                aria-label="search"
            >
            <SearchIcon />
            </IconButton>
            
            <TextField
                placeholder="Type to search for a book by title or author"
                sx={{
                backgroundColor: theme.palette.primary.main, 
                borderRadius: 5,
                width: 350,
                }}
            >
            </TextField>

        </Box>

    </Box>
    
)};

export default Home;
