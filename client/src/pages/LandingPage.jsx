import { Container, Box, Grid } from "@mui/material";
import UserMediaCard from "../components/UserMediaCard";
import { PlantIdCard } from "../components/PlantIdCard";
// import { Ingredientform } from "../components/Ingredientform";

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <Grid item xs={12} md={3}>
            {/* left column */}
            {/* <PlantIdCard></PlantIdCard> */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* middle column */}
            <UserMediaCard></UserMediaCard>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* right column */}
            {/* <Ingredientform/> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LandingPage;
