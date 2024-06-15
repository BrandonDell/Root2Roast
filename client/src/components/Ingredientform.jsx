import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
export const Ingredientform = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here (e.g., send data to server)
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=user&q=tomato&app_id=b51976f6&app_key=%204b58f8200ceb9dd0a25df2ef3bd593af%09
`
        );
        console.log(
          `https://api.edamam.com/api/recipes/v2?type=user&q=tomato&app_id=b51976f6&app_key=%204b58f8200ceb9dd0a25df2ef3bd593af%09
`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    }

    if (query) {
      console.log("value of query", query);
      fetchData();
    }
  }, [query]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    console.log("searchTerm is", searchTerm);
    setQuery(searchTerm);
  };
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        height: "80vh",
        bgcolor: "background.paper",
        p: 2,
        boxShadow: 3,
        overflow: "scroll",
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{ color: "#black", fontSize: "45px" }}
      >
        Ingredient form
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "#fff", width: "100%" }}
      >
        List a ingredient below.
      </Typography>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          label="Ingredient"
          variant="filled"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: "50%" }}
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>Error fetching data: {error}</p>}
      <p>{JSON.stringify(data, null, 2)}</p>
    </Box>
  );
};
