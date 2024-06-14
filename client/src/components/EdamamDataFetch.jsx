import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeDataFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.edamam.com/search',
        params: {
            q: query,
            app_id: process.env.REACT_APP_EDAMAM_APP_ID,
            app_key: process.env.REACT_APP_EDAMAM_APP_KEY
          }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchRecipe();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <div>
      <h1>Recipe Data</h1>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDataFetch;