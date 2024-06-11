const axios = require('axios');

const getExternalData = async () => {
  try {
    const response = await axios.get('https://external-api.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching external data:', error);
    throw new Error('Failed to fetch external data');
  }
};

module.exports = {
  getExternalData,
};
