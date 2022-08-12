import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = ({theme}) => {
    return (
        <footer>
        <Box 
            bottom="0px"
            left="0px"
            bgcolor="#363636"
            color="#fca311"
            padding="1rem 0"
        >
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                {/* Pages column */}
                <Box textAlign="center" sx={{ borderBottom: '1px solid #fca311', padding: '0.5rem 0' }}>Pages</Box>
                <Box margin="0.5rem 0 0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/">
                        Home
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/results">
                        Games
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/results">
                        Leagues
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/results">
                        Players
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/results">
                        Matches
                    </Link>
                </Box>
              </Grid>

              {/* Account */}
              <Grid item xs={12} sm={4}>
              <Box textAlign="center" sx={{ borderBottom: '1px solid #fca311', padding: '0.5rem 0' }}>Account</Box>
                <Box margin="0.5rem 0 0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/">
                        Sign in
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/SignUp">
                        Sign Up
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} href="/team-register">
                        Team register
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} href="/player-register">
                        Player register
                    </Link>
                </Box>
              </Grid>

              {/* Contact */}
              <Grid item xs={12} sm={4}>
              <Box textAlign="center" sx={{ borderBottom: '1px solid #fca311', padding: '0.5rem 0' }}>Contact</Box>
                <Box margin="0.5rem 0 0.3rem 0" textAlign="center">
                    <Link style={{color: '#ffffff' }} to="/contact">
                        Contact
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/">
                        theesportscenter@outlook.com
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/ ">
                        TheEsportsCenter Twitter
                    </Link>
                </Box>

                <Box margin="0.3rem 0" textAlign="center">
                    <Link style={{ color: '#ffffff' }} to="/">
                        TheEsportsCenter.co.uk
                    </Link>
                </Box>
              </Grid>
            </Grid>

            {/* Footnote */}
            <Box textAlign="center" pt={{ xs: 2, sm: 5 }} pb={{ xs: 2, sm: 0 }}>
              Esports Center &copy; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    );
}

export default Footer;