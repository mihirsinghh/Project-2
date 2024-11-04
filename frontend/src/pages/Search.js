import React, {useState, useEffect} from "react";
import {Box, TextField, IconButton, Grid2, CardContent, CardMedia, Card, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const theme = useTheme();
    const[query, setQuery] = useState("");
    const[results, setResults] = useState([]);

    const handleInputChange = (input) => {
        setQuery(input.target.value); //sets the value of "query" to the input typed into text field
    };

    const handleSearch = async() => {
        //fetch books based on query
    };

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
                onClick = {handleSearch} //calls the handleSearch function whenever the search icon clicked
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
