const axios = require('axios');

const getExternalData = async () => {
  try {
    const response = await axios.get('https://api.edamam.com/doc/open-api/recipe-search-v2.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching external data:', error);
    throw new Error('Failed to fetch external data');
  }
};
// app.get('/recipes/:query', async (req, res) => {
//     const response = await axios.get(
//         `https://api.adaman.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
//     )
//     console.log(response.data.hits)
//     res.json(response.data.hits)
// })

module.exports = {
  getExternalData,
};
