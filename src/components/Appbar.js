import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import images from '../assets/banking-and-finance-1.jpg';

export default function appbar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
       
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
          >
          </IconButton>
          <Link to="/" color="inherit" className='btn btn-primary' >Home</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} fontSize={30} >
            Cash Concentration Engine 
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
