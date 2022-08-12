import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

//Styled search bar component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  margin: '0 1rem',
  width: '20%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0 1rem',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding plus font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header(props) {
  //Dropdown
  const [page, setPage] = React.useState('');

  const dropdownChange = (event) => {
    setPage(event.target.value);
  };

  //Responsive navmenu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Open hamburger
  const OpenHamburger = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Close hamburger
  const CloseHamburger = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
        <AppBar>
        <Toolbar sx={{justifyContent: 'space-evenly', bgcolor: '#042a2b'}}>
          {/* Logo */}
          <Link href='/' sx={{
              //Override the effects of justify content
              m: 'auto', 
              ml: 0}}
          >
            <Box
              component="img"
              sx={{
                height: 'auto',
                width: 70,
                m: 'auto', //Override the effects of justify content
                ml: 0
              }}

              alt="Logo"
              src="../logo192.png"
            />
          </Link>

          {/* Search bar */}
          <Search sx={{ display: { xs: 'none', sm: 'flex' }, }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Navigation Links */}
          <MenuItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <NavLink style={{ textDecoration: 'none', color: '#ffffff', borderLeft: '1px solid #fca311', paddingLeft: '0.5rem'}} to="/SignIn">Sign in</NavLink> {/* Style used in place of sx as text decoration is hard to achieve */}
          </MenuItem>

          <MenuItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <NavLink style={{ textDecoration: 'none', color: '#ffffff' }} to="/SignUp">Register</NavLink>
          </MenuItem>

          <MenuItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <NavLink style={{ textDecoration: 'none', color: '#ffffff', borderRight: '1px solid #fca311', paddingRight: '0.5rem'}} to="/contact">Contact</NavLink>
          </MenuItem>
          
          {/* Drop down */}
          <Box  sx={{width: 120}}>
            <FormControl  fullWidth size='small'>
            <InputLabel sx={{ color: '#ffffff' }}>Pages</InputLabel>
            <Select
              value={page}
              onChange={dropdownChange}
              sx={{ bgcolor: '#764abc', color: '#ffffff' }}
            >
              <MenuItem>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }}  to="/results">Games</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/results">Leagues</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/results">Players</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/results">Matches</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/">Home</NavLink>
              </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Hamburger */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }}}> 
            <IconButton sx={{ mr: '0', pr: '0' }}
              size="large"
              onClick={OpenHamburger}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              //Keeps menu anchored to parent
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={CloseHamburger}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {/* Navigation Links */}
              <MenuItem onClick={CloseHamburger}>
                  <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/SignIn">Sign in</NavLink> {/* Style used in place of sx as text decoration is hard to achieve */}
              </MenuItem>

              <MenuItem onClick={CloseHamburger}>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/SignUp">Register</NavLink>
              </MenuItem>

              <MenuItem onClick={CloseHamburger}>
                <NavLink style={{ textDecoration: 'none', color: '#000000' }} to="/contact">Contact</NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        </AppBar>
    </React.Fragment>
  );
}