import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class PlayerViewCard extends React.Component {
    render() {
        return (
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" sx={{ bgcolor: 'rgba(4, 42, 43, 0.7)' }}>
                        <CardContent>
                            <Typography variant="h5" textAlign="center" component="div" sx={{mb: 1, color: '#764abc'}}>
                                Statistic Name
                            </Typography>
                            <Typography variant="body2" textAlign="center" sx={{ color: '#ffffff' }}>
                                Statistic info
                            </Typography>
                        </CardContent>
                </Card>
            </Box>
        ); 
    }
}