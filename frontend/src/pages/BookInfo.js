import React from 'react';
import { Card, Box, Typography, Button, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

function BookInfo() {
    const theme = useTheme();
    const location = useLocation(); //allows us to access the passed state data
    const book = location.state.book; //in this case, we want to access passed-in "book" data

    return (
        <Box //page box
            sx = {{
                minHeight: '100vh',
                backgroundColor: theme.palette.secondary.main,
            }}
        >   
            <Box //Box container for image and book description
                sx = {{display: 'flex', flexDirection: 'row', gap: 4}}
            >
                <Card 
                    sx = {{width: 200}}
                >
                    <CardMedia
                        component="img"
                        image={book.thumbnail}
                        sx = {{
                            height: 300,
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </Card>
                        
                <Box
                    sx = {{display: 'flex', flexDirection: 'column', gap: 1, maxWidth: 700}}
                >
                    <Typography variant = "h6">{book.title}</Typography>
                    <Typography variant = "h7">{book.authors}</Typography>
                    <Typography>{book.publisher}</Typography>
                    <Typography>{book.publishedDate}</Typography>
                    <Typography>{book.description}</Typography>  
                </Box>


            </Box>

        </Box>
    );


}

export default BookInfo;