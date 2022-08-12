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

export default class Contact extends React.Component {
    render() {
        return (    
            <Container maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{color: 'white'}}>Contact Us</Typography>
                    {/* Form */}
                    <Box component="form" noValidate sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="teamName"
                                required
                                fullWidth
                                label="Enter your Name:"
                                autoFocus
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="league"
                                required
                                fullWidth
                                label="Enter your Email:"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                sx={{bgcolor: 'white'}}
                                name="league"
                                required
                                fullWidth
                                label="Enter your message"
                                multiline // Creates a text area rather than input
                                rows={6}
                            />
                            </Grid>
                        </Grid>
                        

                        {/* Submit */}
                        <HoverButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 10, bgcolor: '#764abc' }} //Match other input top header and space footer away     
                        >
                            Submit
                        </HoverButton>
                    </Box>
                </Box>
            </Container>
        );
    };
};