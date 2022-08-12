import * as React from 'react'; 
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

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

export default function Error() {
    return (
        <Box sx={{                    
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant='h2' sx={{color: 'white', fontWeight: '500'}}>This page does not exist</Typography>
                <Typography my={3} sx={{color: 'white'}}>The page you were looking for does not exist or has been removed</Typography>
                <Link href='/' sx={{textDecoration: 'none'}}><HoverButton variant='contained' sx={{bgcolor: '#764abc', color: 'white', py: 1, px: 2}}>Return</HoverButton></Link>
            </Box>
        </Box>
    );
};