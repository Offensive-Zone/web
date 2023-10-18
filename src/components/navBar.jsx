import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import theme from '../theme/theme';


export const NavBar = () => {
    return (
        <AppBar position="static" sx={{zIndex:10, height:'80px', backgroundColor:theme.palette.primary.main}}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
