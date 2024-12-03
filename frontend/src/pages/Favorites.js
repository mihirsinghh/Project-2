import React, { useEffect, useState } from "react";
import { Box, Grid, Card, CardMedia, Typography, Button } from "@mui/material";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    // Remove a book from favorites
    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter((book) => book.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist to localStorage
    };

    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                minHeight: "100vh",
                padding: 4,
            }}
        >
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: 4, color: "text.primary" }}
            >
                My Favorites
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {favorites.length > 0 ? (
                    favorites.map((book) => (
                        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
                            <Card
                                sx={{
                                    backgroundColor: "secondary.main",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: 2,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={book.thumbnail || "https://via.placeholder.com/150"}
                                    alt={book.title}
                                    sx={{
                                        height: 300,
                                        width: "auto",
                                        marginBottom: 2,
                                        objectFit: "cover",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "text.primary",
                                        textAlign: "center",
                                    }}
                                >
                                    {book.title}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "text.secondary",
                                        textAlign: "center",
                                        marginTop: 1,
                                    }}
                                >
                                    {book.authors?.join(", ") || "Unknown Author"}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => removeFavorite(book.id)}
                                    sx={{ marginTop: 2 }}
                                >
                                    Remove from Favorites
                                </Button>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "center",
                            marginTop: 4,
                            color: "text.primary",
                        }}
                    >
                        No favorites added yet. Add some books to your favorites!
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}

export default Favorites;
