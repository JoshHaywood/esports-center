import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PlayerViewCard from './PlayerViewCard';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


export default class PlayerViewPage extends React.Component {
    constructor() {
        super()
    }

    render () {
        const Item = this.Item
        return (
            <Container sx={{width: "100%", bgcolor: 'rgba(4, 42, 43, 0.6)'}} style={{display: 'flex', flexDirection: 'row', border: '1px solid black', padding: '0', margin: '10rem'}}>
                {/* main box */}
                <Box sx={{ width: '100%', minHeight: '300px'}}>
                    {/* box header */}
                    <Box class="index-card-background" style={{ display: 'flex', flexDirection: 'row', padding: '3rem 0' }} sx={{ width: '100%', height: '80px', alignItems: 'center'}}>
                        <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" style={{border: '2px solid black', borderRadius: '50%', height: '60px', width: '60px', marginLeft: '20px', marginRight: '20px'}} />
                        <Typography mt={1} mb={1} variant="h4" sx={{ color: '#fca311' }} >Name</Typography>
                    </Box>

                    {/* box content */}
                    <Box sx={{width: '95%', m: '0 auto', marginTop: '3rem'}}>
                        <Typography mt={2} mb={2} variant="h5" sx={{color: '#ffffff'}} >About</Typography>
                        <Typography mt={2} mb={2} variant="body1" sx={{color: '#ffffff'}} >
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>

                        {/* view button */}
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '5rem 0'}}>
                            <Grid container spacing={4} columns={{ xs: 1, md: 8, lg: 12 }}>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                                <Grid item xs={4}>                                
                                    <PlayerViewCard />                                
                                </Grid>
                            </Grid>                            
                        </div>
                    </Box>
                </Box>
            </Container>
        )
    }
}