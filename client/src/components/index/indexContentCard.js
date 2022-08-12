import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IndexMiniCard from './indexMiniCard'

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


export default class IndexContentCard extends React.Component {
    constructor() {
        super()
        this.state = {
            voteCount: 0
        }
    }

    onVoteUp = () => {
        this.setState({ voteCount: this.state.voteCount += 1 })        
    }

    onVoteDown = () => {
        this.setState({ voteCount: this.state.voteCount -=1 })
    }

    Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    render () {
        const Item = this.Item
        return (
            <Container sx={{width: "100%", bgcolor: 'rgba(4, 42, 43, 0.6)'}} style={{display: 'flex', flexDirection: 'row', border: '1px solid black', padding: '0'}}>

                {/* side box */}
                <Box sx={{ width: '50px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', border: '1px solid black', bgcolor: 'rgba(4, 42, 43, 0.7)' }}>  
                    <div style={{marginTop: '20px'}}><ArrowUpwardIcon onClick={() => this.onVoteUp()} sx={{ color: '#fca311' }} /></div>
                    <div><Typography mt={1} mb={1} sx={{color: '#ffffff'}} >{this.state.voteCount}</Typography></div>
                    <div><ArrowDownwardIcon onClick={() => this.onVoteDown()} sx={{color: '#fca311'}} /></div>
                </Box>
                
                {/* main box */}
                <Box sx={{ width: '100%', minHeight: '300px'}}>
                    {/* box header */}
                    <Box class="index-card-background" style={{ display: 'flex', flexDirection: 'row', padding: '1.5rem 0' }} sx={{ width: '100%', height: '80px', alignItems: 'center'}}>
                        <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" style={{border: '2px solid black', borderRadius: '50%', height: '60px', width: '60px', marginLeft: '20px', marginRight: '20px'}} />
                        <Typography mt={1} mb={1} variant="h4" sx={{ color: '#fca311' }} >Name</Typography>
                    </Box>

                    {/* box content */}
                    <Box sx={{width: '95%', m: '0 auto'}}>
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
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '50px 0'}}>
                            <Grid container spacing={4} columns={{ xs: 1, md: 8, lg: 12 }}>
                                <Grid item xs={4}>                                
                                    <IndexMiniCard />                                
                                </Grid>
                                <Grid item xs={4}>
                                    <IndexMiniCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <IndexMiniCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <IndexMiniCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <IndexMiniCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <IndexMiniCard />
                                </Grid>
                            </Grid>                            
                        </div>
                    </Box>
                </Box>
            </Container>
        )
    }
}