import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Heading() {
    return (
        <Box sx={{ minWidth: 275, margin: '3rem 0' }}>
            <Card variant="outlined" sx={{background: 'none', border: 'none'}}>
                    <CardContent >
                    <Typography variant="h4" textAlign="center" component="div" sx={{mb: 1, color: '#fca311'}}>
                        Heading
                    </Typography>
                    <Typography variant="body2" textAlign="center" sx={{ color: '#ffffff' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        <br />        
                    </Typography>
                    </CardContent>
            </Card>
        </Box>
    ); 
}