import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function BookInfo() {
    const theme = useTheme();
    const location = useLocation();
    const book = location.state.book; // Access the passed-in book data
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Add book to favorites
    const addToFavorites = () => {
        // Check if the book is already in the favorites list
        if (!favorites.some((fav) => fav.id === book.id)) {
            const updatedFavorites = [...favorites, book];
            setFavorites(updatedFavorites);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist to localStorage
            alert(`${book.title} has been added to your favorites!`);
        } else {
            alert(`${book.title} is already in your favorites.`);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
            }}
        >
            {/* Page Container */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                {/* Image and Add Button */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Card
                        sx={{
                            width: 300,
                            marginLeft: 10,
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={book.thumbnail}
                            sx={{
                                height: 400,
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Card>
                    <Button
                        variant="contained"
                        sx={{
                            marginLeft: 10,
                            backgroundColor: theme.palette.secondary.main,
                        }}
                        onClick={addToFavorites} // Add to Favorites
                    >
                        Add to Favorites
                    </Button>
                </Box>

                {/* Book Info */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        maxWidth: "60%",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ color: theme.palette.text.primary }}
                    >
                        {book.title}
                    </Typography>
                    <Typography
                        variant="h7"
                        sx={{ color: theme.palette.text.primary }}
                    >
                        {book.authors?.join(", ")}
                    </Typography>
                    <Typography
                        sx={{ color: theme.palette.text.primary }}
                    >
                        {book.publisher}
                    </Typography>
                    <Typography
                        sx={{ color: theme.palette.text.primary }}
                    >
                        {book.publishedDate}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: 15,
                        }}
                    >
                        {book.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default BookInfo;

