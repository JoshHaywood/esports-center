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

export default function PlayerRegister() {
    return(
        <Container maxWidth="md">
            <Box
                sx={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5" sx={{color: 'white'}}>Register Player</Typography>
                <Box component="form" noValidate sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            sx={{bgcolor: 'white'}}
                            name="playerName"
                            required
                            fullWidth
                            label="Enter players in game name:"
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            sx={{bgcolor: 'white'}}
                            name="team"
                            required
                            fullWidth
                            label="Players team:"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            sx={{bgcolor: 'white'}}
                            name="role"
                            required
                            fullWidth
                            label="Players role in thier team:"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            sx={{bgcolor: 'white'}}
                            name="game"
                            required
                            fullWidth
                            label="Player primary game:"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            sx={{bgcolor: 'white'}}
                            name="description"
                            required
                            fullWidth
                            inputProps={{ maxLength: 256 }}
                            multiline // Creates a text area rather than input
                            rows={6}
                            label="Write a description about the player:"
                        />
                        </Grid>
                    </Grid>
                    <HoverButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 10, bgcolor: '#764abc' }} //Match other input top header and space footer away     
                    >
                        Register Player
                    </HoverButton>
                </Box>
            </Box>
        </Container>
    );
};