
import { Container,Grid, Typography } from "@mui/material";
import { Planform, } from "../components/planform";
import { Ingredientform } from "../components/Ingredientform";

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
          <Grid container spacing={2}>
            <Grid item xs={4}>
          {/* left colum */}
          <Planform/>
            </Grid>
            <Grid item xs={4}>
                {/* middle colum */}
                <Typography variant="h1" gutterBottom sx={{ color: "#black", fontSize: "50px" }}>
      middle
    </Typography>
            </Grid>
            <Grid/>
            <Grid item xs={4}>
                {/* right colum */}
                <Typography variant="h1" gutterBottom sx={{ color: "#black", fontSize: "50px" }}>
      <Ingredientform/>
    </Typography>
            </Grid>
          </Grid>
    </Container>
  );
};


export default LandingPage;
