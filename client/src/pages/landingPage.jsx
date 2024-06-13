import React from "react";
import { Container, Box, Typography } from "@mui/material";

const LandingPage = () => {
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
      <Box sx={{
        height:"100%",
        width:"100%",
        backgroundColor:"rgba(0, 0, 0, 0.3)"
      }}>
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography variant="h1" gutterBottom sx={{ color: "#fff" }}>
            Welcome
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#fff", width: "30%" }}
          >
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;

