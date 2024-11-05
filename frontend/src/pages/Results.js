import React from 'react';
import {Box, Grid2, Card, CardMedia } from '@mui/material';
import {useLocation} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

function Results() {
  const theme = useTheme();  
  const location = useLocation(); //provides access to the location object
  const results = location.state.results; // Access results array from the state passed in navigation

  return (
    //sets up a Grid container with a spacing of "2" between each item, which will be each book-card
    <Grid2 
        container
        sx={{
            backgroundColor: theme.palette.secondary.main,
            minHeight: '100vh',
        }}
        justifyContent = "center"
        spacing = {6}
    >   
        {/* map each Book item from results array*/}
        {results.map((book) => (
        //each Book item is placed as its own individual Card within its own Box
          <Box marginTop = {5}> 
            <Card>
              <CardMedia
                component="img"
                image={book.thumbnail}
              />
            </Card>
          </Box>
        ))}

    </Grid2>
  );
}

export default Results;
