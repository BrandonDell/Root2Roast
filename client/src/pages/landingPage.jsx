import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

const LandingPage = () => {
  const [plantName, setPlantName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here (e.g., send data to server)
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "80vh",
        backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/01/76/41/16/1000_F_176411659_7ezOdQ8WHONNzosFigRQETnlIIrd0tNx.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        className="test"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "black !important",
          width: "300px",
          position: "fixed",
          left: 0,
          top: 85,
          height: "80%",
          bgcolor: "background.paper",
          p: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ color: "#black" }}>
          Plant Form
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#fff", width: "100%" }}
        >
          Welcome! Enter the name of your plant below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Plant Name"
            variant="filled"
            value={plantName}
            onChange={(event) => setPlantName(event.target.value)}
            sx={{ width: "50%" }}
            required
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};
export default LandingPage;
