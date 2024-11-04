import React from "react";
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
//import "./Navbar.css";

const Navbar = () => {
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant = "h6" sx={{ flexGrow: 1 }} color = "textPrimary">
          <Link to = '/home'>
            <Button> BookWorm </Button>
          </Link>
        </Typography>
        <Link to = '/search'>
            <Button>Search</Button>
        </Link>
        <Link to = '/my-favorites'>
            <Button>My Favorites</Button>
        </Link>
      </Toolbar>
    </AppBar>
)};
  
  // Always export your components so they can be imported in other files
  export default Navbar;
