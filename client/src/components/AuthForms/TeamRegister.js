import * as React from "react";
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const HoverButton = styled('div')(({ theme }) => ({
    textAlign: 'center',
    padding: '0.6rem',
    width: '100%',
    borderRadius: '5px',
    color: '#ffffff',
    backgroundColor: 'rgb(118, 74, 188)',
    '&:hover': {
      backgroundColor: 'rgba(118, 74, 188, 0.85)',
    },
    cursor: 'pointer'
}));

export default class TeamRegister extends React.Component {
    constructor() {
        super();
        this.state={
            teamName: '',
            league:'',
            game: '',
            playerCount: '',
            country: ''
        }
    }

    onTeamNameChange = (event) => {
        this.setState({teamName: event.target.value})
    }
    onLeagueChange = (event) => {
        this.setState({league: event.target.value})
    }
    onGameChange = (event) => {
        this.setState({game: event.target.value})
    }
    onPlayerCountChange = (event) => {
        this.setState({playerCount: event.target.value})
    }
    onCountryChange = (event) => {
        this.setState({country: event.target.value})
    }



    registerTeam = () => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/registerTeam', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                teamName:   this.state.teamName,
                league: this.state.league,
                game:   this.state.game,
                playerCount: this.state.playerCount,
                country: this.state.country            
            })
        })
        .then(response => response.json())
    } 


    render() {
        return (    
            <Container maxWidth="md">
                <Box
                    sx={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{color: 'white'}}>Register Team</Typography>
                    {/* Form */}
                    <Box component="form" noValidate sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="teamName"
                                required
                                fullWidth
                                label="Enter your Teams's name"
                                autoFocus
                                onChange={this.onTeamNameChange} 
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="league"
                                required
                                fullWidth
                                label="What league do you play in?"
                                onChange={this.onLeagueChange} 
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="game"
                                required
                                fullWidth
                                label="What game does your team play?"
                                onChange={this.onGameChange} 
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="country"
                                required
                                fullWidth
                                label="What country does your team represent?"
                                onChange={this.onCountryChange} 
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="playerAmount"
                                required
                                fullWidth
                                label="How many players are in your team?"
                                onChange={this.onPlayerCountChange} 
                            />
                            </Grid>
                        </Grid>
                        
                        {/* Image upload */}
                        <Box sx={{mt: 3}}>
                            <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                                accept="image/png, image/jpeg"
                            />

                            <HoverButton color="secondary" variant="contained" component="span">
                                Upload team image
                            </HoverButton>
                            </label>
                        </Box>

                        {/* Submit */}
                        <HoverButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 10, bgcolor: '#764abc' }} 
                            onClick={() => this.registerTeam()}//Match other input top header and space footer away     
                        >
                            Register
                        </HoverButton>
                    </Box>
                </Box>
            </Container>
        );
    };
};