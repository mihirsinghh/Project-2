import React from 'react';
import {Box, Grid2, Card, CardMedia } from '@mui/material';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
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
            backgroundColor: theme.palette.primary.main,
            minHeight: '100vh',
        }}
        justifyContent = "center" //aligns all Grid items in the center of the container along the row-axis
        spacing = {6}
    >   
        {/* map each Book item from results array*/}
        {results.map((book) => (
        //each Book item is placed as its own individual Card within its own Box with its own unique ID so that React can manage them individually
          <Box marginTop = {5} key = {book.id}>
            {/* Once each card's box is clicked, URL changes according to corresp. book id and book's data is passed to the newly rendered component "BookDetails" */}
            <Link to = {`/book/${book.id}`} state = {{book}}> 
                <Card sx = {{width: 200}}>
                    <CardMedia
                        component="img"
                        image={book.thumbnail}
                        sx = {{
                            height: 300,
                            width: '100%', //width of 200 and height of 300 gives each Card's media 2:3 aspect ratio, which is common for book covers
                            objectFit: 'cover'
                        }}
                    />
                </Card>
            </Link>
          </Box>
        ))}

    </Grid2>
  );
}

export default Results;
