// src/pages/Results.js

import React from 'react';
import {Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Results() {
//useLocation hook allows you to access the "location" object, which includes data passed through state
//we use it to access "results" array
  const location = useLocation();
  const results = location.state?.results; // Access results array from state

  return (
    //sets up a Grid container with a spacing of "2" between each item, which will be each book-card
    <Grid2 container spacing={2}>
        {/* map each Book item from results array*/}
        {results.map((book) => (
          //each individual Grid item represents a distinct "cell" in the Grid, allowing you to control dimensions and layout of each item
          <Grid2 item xs={12} sm={6} md={4} key={book.id}> 
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
