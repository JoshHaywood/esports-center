import * as React from "react";
import { useState, useEffect } from "react";
//import Avatar from "../../esports.png";
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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
//import Copyright from "./Copyright";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Cookies from "js-cookie";

const HoverButton = styled("button")(({ theme }) => ({
  backgroundColor: "rgb(118, 74, 188)",
  padding: "0.5rem",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "rgba(118, 74, 188, 0.85)",
    cursor: "pointer",
  },
  fontSize: "1.5rem",
  border: "none",
  width: "100%",
}));

const SignUp = ({ theme }) => {
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
      .post(`${config.serverUrl}/auth/signup`, {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
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
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: { xs: 12, md: 20 },
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
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                sx={{ color: "white" }}
                control={
                  <Checkbox value="allowExtraEmails" sx={{ color: "white" }} />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <HoverButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white" }}
          >
            Sign Up
          </HoverButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
};

export default SignUp;
