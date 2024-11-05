import React from "react";
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import {useTheme} from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();

    return (
    <AppBar position="static">
      <Toolbar sx = {{backgroundColor: theme.palette.secondary.main}}>
        <Typography variant = "h6" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
          BookWorm
        </Typography>
        <Link to = '/search'>
            <Button variant = 'contained'>Search</Button>
        </Link>
        <Link to = '/my-favorites'>
            <Button variant = 'contained'>My Favorites</Button>
        </Link>
      </Toolbar>
    </AppBar>
)};
  
  export default Navbar;
