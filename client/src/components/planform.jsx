import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
export const Planform = () => {
  const [plantName, setPlantName] = useState("");
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
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
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here (e.g., send data to server)
  };
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
        <Typography
          variant="h1"
          gutterBottom
          sx={{ color: "#black", fontSize: "50px" }}
        >
          Plant Form
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ color: "#fff", width: "100%" }}
        >
          Welcome! Enter the name of your plant below.
        </Typography>

        <form onSubmit={handleSearchSubmit}>
          <TextField
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: "50%" }}
            variant="filled"
            label="Plant Name"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        {error && <p style={{ color: "red" }}>Error fetching data: {error}</p>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </div>
  );
};
