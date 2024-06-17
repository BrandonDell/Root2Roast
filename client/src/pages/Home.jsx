import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Home = () => {
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
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
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
            In a world where sustainable living and culinary creativity go hand
            in hand, Root2Roast emerges as your perfect companion. This
            innovative app bridges the gap between garden and kitchen,
            empowering you to explore the full journey of your favorite plants
            and ingredients. Whether you’re an aspiring gardener looking to
            cultivate your green thumb or a culinary enthusiast eager to
            discover new recipes, Root2Roast is here to guide you every step of
            the way.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
