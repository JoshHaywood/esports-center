import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class IndexMiniCard extends React.Component {
    render() {
        return (
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" sx={{ bgcolor: 'rgba(4, 42, 43, 0.7)' }}>
                        <CardContent >
                            <Typography variant="h5" textAlign="center" component="div" sx={{mb: 1, color: '#764abc'}}>
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
}