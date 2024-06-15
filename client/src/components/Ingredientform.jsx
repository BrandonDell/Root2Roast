import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import IngredientResultCard from "./IngredientResultCard";

export const Ingredientform = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b51976f6&app_key=%204b58f8200ceb9dd0a25df2ef3bd593af%09
`
        );
        console.log(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b51976f6&app_key=%204b58f8200ceb9dd0a25df2ef3bd593af%09
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
        p: 2,
        boxShadow: 3,
        overflow: "scroll",
      }}
    >
      <form onSubmit={handleSearchSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <TextField
            label="Enter ingredient here"
            variant="filled"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: "70%", backgroundColor: "#fff" }}
            required
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
      {error && <p style={{ color: "red" }}>Error fetching data: {error}</p>}
      {data && (
        <Grid container spacing={2}>
          {data?.hits?.map((item, index) => {
            return (
              <Grid item xs={12}>
                <IngredientResultCard
                  title={item?.recipe?.label}
                  img={item?.recipe?.image}
                  ingredients={item?.recipe?.ingredientLines}
                  url={item?.recipe?.shareAs}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
