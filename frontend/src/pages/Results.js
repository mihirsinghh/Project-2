// src/pages/Results.js

import React from 'react';
import {Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

function Results() {
  const theme = useTheme();  
  const location = useLocation(); //provides access to the location object
  const results = location.state?.results; // Access results array from the state passed in navigation

  return (
    //sets up a Grid container with a spacing of "2" between each item, which will be each book-card
    <Grid2 container spacing={8} sx={{backgroundColor: theme.palette.secondary.main}}>
        {/* map each Book item from results array*/}
        {results.map((book) => (
          //each individual Grid item represents a distinct "cell" in the Grid, allowing you to control dimensions and layout of each item
          <Grid2 item key={book.id}> 
            <Card>

              <CardMedia
                component="img"
                height="140"
                image={book.thumbnail}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {book.author}
                </Typography>
              </CardContent>

            </Card>
          </Grid2>
        ))}


    </Grid2>
  );
}

export default Results;
