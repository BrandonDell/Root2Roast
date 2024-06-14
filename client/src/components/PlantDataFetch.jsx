import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button } from '@mui/material';


const PlantDataFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [plantName, setPlantName] = useState('');

  const fetchPlant = async () => {
    const apiKey = process.env.REACT_APP_API_KEY; // Access environment variable
    if (!apiKey) {
      console.error('API key is missing');
      setError(new Error('API key is missing'));
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://perenual.com/api/v1/plants',
      params: { name: plantName },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log('Fetched data:', response.data);
    } catch (error) {
      console.error('Error fetching plant data:', error);
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlant();
  };

  return (
    <Container>
      <div>
        <h1>Plant Data</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            placeholder="Enter plant name"
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </form>
        {error && <p>Error: {error.message}</p>}
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default PlantDataFetch;
