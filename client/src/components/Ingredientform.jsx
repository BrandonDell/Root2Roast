import React, {useState} from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";
export const Ingredientform = () => {
    const [ingredientName, setIngredientName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform form submission logic here (e.g., send data to server)
    };
    return (
    <div>
        <Box
        className="test"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "black !important",
          width: "300px",
          position: "fixed",
          right: 0,
          top: 85,
          height: "80%",
          bgcolor: "background.paper",
          p: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ color: "#black", fontSize: "45px" }}>
        Ingredient form
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#fff", width: "100%" }}
        >
          List a ingredient below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ingredient"
            variant="filled"
            value={ingredientName}
            onChange={(event) => setIngredientName(event.target.value)}
            sx={{ width: "50%" }}
            required
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
    )
}