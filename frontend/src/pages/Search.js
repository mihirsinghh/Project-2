import React, {useState} from "react";
import {Box, TextField, IconButton} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';

const Search = () => {
    const theme = useTheme();
    const[query, setQuery] = useState("");
    const[results, setResults] = useState([]);

    const navigate = useNavigate();

    const handleInputChange = (input) => {
        setQuery(input.target.value); //sets the value of "query" to the input typed into text field
    };

    const handleSearch = async() => {
        if (!query) return;

        try {
            //fetch data from the API using a dynamic query
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);
            //parses the fetched data into JSON format
            const data = await response.json();

            //the JSON object returned has a property called "items" which is an array of Book objects
            //each Book object has multiple attributes
            //the map() function iterates over each Book object in the data.items array and applies the argument function to each Book
            //in this case, the function takes each Book item and returns a new item with a subset of the Book's original attributes
            //the result of this mapping is an array "books" which contains all of the transformed Book objects
            const books = data.items.map((item) => ({
                id: item.id,
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                authors: item.volumeInfo.authors,
                publisher: item.volumeInfo.publisher,
                publishedDate: item.volumeInfo.publishedDate,
                description: item.volumeInfo.description,
                thumbnail: item.volumeInfo.imageLinks.thumbnail,
            }));
            
            setResults(books); //update "results" state to the "books" array

            // Navigate to the Results page and pass the results as state
            navigate('/results', { state: { results: books } });
        }

        catch (error) {
            console.error("Error obtaining books from Google Books API");
        }
    };

    return (
    <Box
        sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.primary.main,
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
                onClick = {handleSearch} //calls the handleSearch function whenever the search icon clicked
            >
            <SearchIcon />
            </IconButton>
            
            <TextField
                placeholder="Type to search for a book by title or author"
                sx={{
                backgroundColor: theme.palette.secondary.main, 
                borderRadius: 5,
                width: 350,
                }}
                onChange = {handleInputChange} //updates state of "query"
                //value = {query} is not necessary for user-inputted text to display in the textField, but it allows React to control textField
                //such that it reliably syncs with the state of "query". Thus, if something else changes the state of "query", such as clearing it,
                //this might not necessarily be reflected in textField unless controlled by React
                value = {query} //ensures that the textField reflects the latest query state upon each render
            >
            </TextField>

        </Box>

    </Box>
    
)};

export default Search;
