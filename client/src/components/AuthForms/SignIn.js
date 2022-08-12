import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "../../esports.png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import axios from "axios";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { styled } from "@mui/material/styles";

const SignIn = ({ theme }) => {
  const HoverButton = styled("button")(({ theme }) => ({
    backgroundColor: "rgb(118, 74, 188)",
    padding: "0.3rem",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "rgba(118, 74, 188, 0.85)",
      cursor: "pointer",
    },
    fontSize: "1.5rem",
    border: "none",
    width: "100%",
  }));

  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("jwt")) {
      navigate("/");
    }
  }, []);
  const [formErrors, setFormErrors] = useState([]);
  const config = useSelector((state) => state.config);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    axios
      .post(`${config.serverUrl}/auth/login`, {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((response) => {
        if (response.status === 200) {
          Cookies.set("jwt", response.data.token);
          // Redirect after returning token
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
        setFormErrors(error.response.data);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 20,
          marginBottom: 10, //Space footer away
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {formErrors.length > 0 && (
          <Alert sx={{ width: "100%", marginBottom: 2 }} severity="error">
            <AlertTitle>
              There are some errors in the data you entered
            </AlertTitle>
            {/* <ul>
            {formErrors.map((error) => {
              return <li>{error.msg}</li>;
            })}
          </ul> */}
            <p>{formErrors[0].msg}</p>
          </Alert>
        )}
        {/* Code below didn't work. Commented it out for now */}
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}

        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ bgcolor: "white" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            color="primary"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ bgcolor: "white" }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" sx={{ color: 'white ' }} />}
            label="Remember me"
            sx={{ color: 'white' }}
          />
          <HoverButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, fontSize: '1rem', color: 'white'}}
          >
            Sign In
          </HoverButton>
          <Grid container>
            <Grid item xs>
              <Link href="/ForgotPassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
};

export default SignIn;
