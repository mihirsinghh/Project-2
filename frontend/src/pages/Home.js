import React from "react";
import {Box} from '@mui/material';
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
        }}>
            <p>Welcome to BookWorm! Search up any book by title/author and add it to your collection!</p>
        </Box>

)};

export default Home;