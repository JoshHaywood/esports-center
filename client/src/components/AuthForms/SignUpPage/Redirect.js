import * as React from 'react'; 
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const HoverButton = styled('div')(({ theme }) => ({
    backgroundColor: 'rgb(118, 74, 188)',
    padding: '0.5rem',
    textAlign: 'center',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'rgba(118, 74, 188, 0.85)',
      cursor: 'pointer',
    },
}));

export default function Redirect() {
    return (
        <Box sx={{mt: 8}}>
            <Typography variant='h3' sx={{color: 'white', fontWeight: '500', mb: 3}}>Or for registering your Team or Players</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row' , mt: 5}}>
                <Link href='/team-register' sx={{textDecoration: 'none'}}><HoverButton variant='contained' sx={{bgcolor: '#764abc', color: 'white', mr: 3}}>Register your Team</HoverButton></Link>
                <Link href='/player-register' sx={{textDecoration: 'none'}}><HoverButton variant='contained' sx={{bgcolor: '#764abc', color: 'white', mr: 3}}>Register individual players</HoverButton></Link>
                <Link href='/league-register' sx={{textDecoration: 'none'}}><HoverButton variant='contained' sx={{bgcolor: '#764abc', color: 'white', mr: 3}}>Register a League</HoverButton></Link>
                <Link href='/league-team-register' sx={{textDecoration: 'none'}}><HoverButton variant='contained' sx={{bgcolor: '#764abc', color: 'white', mr: 3}}>Register a Team into a League</HoverButton></Link>
            </Box>
        </Box>
    );
};