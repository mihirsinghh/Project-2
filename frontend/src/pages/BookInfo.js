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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >   
            <Box //Box container that holds image and book info
                sx = {{display: 'flex', flexDirection: 'row', gap: 10}}
            >   
                {/* Image card */}
                <Card 
                    sx = {{width: 300}}
                >
                    <CardMedia
                        component="img"
                        image={book.thumbnail}
                        sx = {{
                            height: 400,
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </Card>

                {/* Box container that holds book info */}        
                <Box
                    sx = {{display: 'flex', flexDirection: 'column', gap: 1, maxWidth: '60%'}}
                >
                    <Typography variant = "h6" sx = {{color: theme.palette.text.primary}}>{book.title}</Typography>
                    <Typography variant = "h7" sx = {{color: theme.palette.text.primary}}>{book.authors}</Typography>
                    <Typography sx = {{color: theme.palette.text.primary}}>{book.publisher}</Typography>
                    <Typography sx = {{color: theme.palette.text.primary}}>{book.publishedDate}</Typography>
                    <Typography sx = {{color: theme.palette.text.primary, fontSize: 15}}>{book.description}</Typography>  
                </Box>


            </Box>

        </Box>
    );


}

export default BookInfo;