import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import PlantResultCard from "./PlantResultCard";

export const Planform = () => {
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
          `https://perenual.com/api/species-list?key=sk-JuFM666b2f4d3b8905917&q=${query}&edible=true`
        );
        console.log(
          `https://perenual.com/api/species-list?key=sk-JuFM666b2f4d3b8905917&q=${query}`
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
    <div>
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
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ width: "70%", backgroundColor: "#fff" }}
              variant="filled"
              label="Enter plant name here"
              required
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
        {error && <p style={{ color: "red" }}>Error fetching data: {error}</p>}
        {data && console.log(data)}
        {data && (
          <Grid container spacing={2}>
            {data?.data?.map((item, index) => {
              return (
                <Grid item xs={12} key={`grid-item-${index}`}>
                  <PlantResultCard
                    title={item?.common_name}
                    scientificName={item?.scientific_name}
                    wateringInfo={item?.watering}
                    sunlightInfo={
                      Array.isArray(item?.sunlight) ? item?.sunlight : null
                    }
                    img={item?.default_image?.original_url}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </div>
  );
};
