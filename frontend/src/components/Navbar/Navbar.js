import React from "react";
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
//import "./Navbar.css";

const Navbar = () => {
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant = "h6" sx={{ flexGrow: 1 }} color = "textPrimary">
          BookWorm
        </Typography>
        <Button>Search</Button>
        <Button>My Favorites</Button>
      </Toolbar>
    </AppBar>
)};
  
  // Always export your components so they can be imported in other files
  export default Navbar;
