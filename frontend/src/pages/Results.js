import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Results() {
    const location = useLocation(); // Access the state passed from Search
    const results = location.state?.results || []; // Default to empty array if no results are passed

    

    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                minHeight: "100vh",
                padding: 4, // Add spacing
            }}
        >
            {/* Title */}
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginBottom: 4, color: "text.primary" }}
            >
                Search Results
            </Typography>

            {/* Results Grid */}
            <Grid
                container
                spacing={3} // Add spacing between grid items
                justifyContent="center"
            >
                {results.length > 0 ? (
                    results.map((book) => (
                        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
                            <Link
                                to={`/book/${book.id}`} // Navigate to BookInfo page with book ID
                                state={{ book }} // Pass the book object as state
                                style={{ textDecoration: "none" }} // Remove link underline
                            >
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
                                    {/* Book Cover */}
                                    <CardMedia
                                        component="img"
                                        image={book.thumbnail || "https://via.placeholder.com/150"} // Fallback for missing images
                                        alt={book.title}
                                        sx={{
                                            height: 300,
                                            width: "auto",
                                            marginBottom: 2,
                                            objectFit: "cover",
                                        }}
                                    />

                                    {/* Book Title */}
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "text.primary",
                                            textAlign: "center",
                                        }}
                                    >
                                        {book.title || "Unknown Title"}
                                    </Typography>

                                    {/* Book Authors */}
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
                                </Card>
                            </Link>
                        </Grid>
                    ))
                ) : (
                    // Fallback if no results
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: "center",
                            marginTop: 4,
                            color: "text.primary",
                        }}
                    >
                        No results found. Try a different search!
                    </Typography>
                )}
            </Grid>
        </Box>
    );
}

export default Results;

