import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    const [query, setQuery] = useState(""); // For the search input
    const [results, setResults] = useState([]); // To store the fetched books
    const navigate = useNavigate();

    // Handle input change
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Handle search
    const handleSearch = async () => {
        if (!query.trim()) return; // Prevent empty searches

        try {
            // Fetch data from Google Books API
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
            );
            const data = await response.json();

            // Transform data to match your app's structure
            const books = data.items?.map((item) => ({
                id: item.id, // Unique book ID from Google Books
                title: item.volumeInfo.title || "Unknown Title", // Title or fallback
                authors: item.volumeInfo.authors || ["Unknown Author"], // Array of authors or fallback
                publisher: item.volumeInfo.publisher || "Unknown Publisher", // Publisher or fallback
                publishedDate: item.volumeInfo.publishedDate || "Unknown Date", // Date or fallback
                description: item.volumeInfo.description || "No Description", // Description or fallback
                thumbnail: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150", // Thumbnail or placeholder
            }));

            setResults(books || []); // Update results state

            // Navigate to Results page and pass the books data
            navigate("/results", { state: { results: books || [] } });
        } catch (error) {
            console.error("Error fetching books from Google Books API: ", error);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "text.primary",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    direction: "row",
                    alignItems: "center",
                }}
            >
                {/* Search Icon */}
                <IconButton
                    sx={{ marginLeft: 1 }}
                    aria-label="search"
                    onClick={handleSearch} // Trigger the search function
                >
                    <SearchIcon />
                </IconButton>

                {/* Search Input */}
                <TextField
                    placeholder="Type to search for a book by title or author"
                    sx={{
                        backgroundColor: "secondary.main",
                        borderRadius: 5,
                        width: 350,
                    }}
                    onChange={handleInputChange} // Update query state
                    value={query} // Bind the input field to state
                />
            </Box>
        </Box>
    );
};

export default Search;

