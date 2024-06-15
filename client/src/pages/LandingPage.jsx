import { Container, Grid, Typography, Box } from "@mui/material";
import { Planform } from "../components/planform";
import { Ingredientform } from "../components/Ingredientform";

const LandingPage = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {/* left colum */}
            <Planform />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* middle colum */}
            <Typography
              variant="h1"
              gutterBottom
              sx={{ color: "#black", fontSize: "50px" }}
            >
              middle
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* right colum */}
            <Typography
              variant="h1"
              gutterBottom
              sx={{ color: "#black", fontSize: "50px" }}
            >
              <Ingredientform />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LandingPage;
