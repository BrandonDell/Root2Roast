import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import {
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const isLoggedIn = Auth.loggedIn();

  return (
    <Container component="main" maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Card>
          <CardHeader
            title="Login"
            sx={{ color: "black", p: 2, textAlign: "center" }}
          />
          <CardContent>
            {isLoggedIn ? (
              <Typography variant="body1">
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </Typography>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formState.email}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#384e1d" }}
                >
                  Submit
                </Button>
              </form>
            )}

            {error && (
              <Alert severity="error" sx={{ mt: 3 }}>
                {error.message}
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
