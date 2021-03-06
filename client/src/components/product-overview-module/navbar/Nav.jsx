import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Nav = () => {
   return (
      <AppBar elevation={0} position='sticky' className='nav'>
         <div className='nav-container'>
            <NavLink to='/' className='nav-logo'>
               <LocalOfferIcon />
               <Typography variant='h6'>Logo</Typography>
            </NavLink>
            <TextField
               size='small'
               variant='filled'
               label='search'
               InputProps={{
                  startAdornment: (
                     <InputAdornment position='start'>
                        <SearchIcon />
                     </InputAdornment>
                  ),
               }}
               className='nav-search-field'
            >
               <SearchIcon />
            </TextField>
         </div>
      </AppBar>
   );
};

export default Nav;
