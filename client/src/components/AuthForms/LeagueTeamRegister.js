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

export default class LeagueTeamRegister extends React.Component {
    constructor() {
        super();
        this.state={  
            leagueName:'',
            teamName: ''   
        }
    }

    onLeagueNameChange = (event) => {
        this.setState({leagueName: event.target.value})
    }
    onTeamNameChange = (event) => {
        this.setState({teamName: event.target.value})
    }

    registerLeagueTeam = () => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/registerLeagueTeam', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                leagueName:   this.state.leagueName,
                teamName:   this.state.teamName     
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
                    <Typography component="h1" variant="h5" sx={{color: 'white'}}>Register League Team</Typography>
                    {/* Form */}
                    <Box component="form" noValidate sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="leagueName"
                                required
                                fullWidth
                                label="Enter your Leagues name"
                                autoFocus
                                onChange={this.onLeagueNameChange} 
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="teamName"
                                required
                                fullWidth
                                label="Enter your Teams name"
                                autoFocus
                                onChange={this.onTeamNameChange} 
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
                            </label>
                        </Box>

                        {/* Submit */}
                        <HoverButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 10, bgcolor: '#764abc' }} //Match other input top header and space footer away  
                            onClick={() => this.registerLeagueTeam()}   
                        >
                            Register
                        </HoverButton>
                    </Box>
                </Box>
            </Container>
        );
    };
};