const express = require('express');
const router = express.Router();
const axios = require('axios');

// Import your API key from a config file
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Route to handle weather data fetch using async/await
router.post('/weather-async', async (req, res) => {
  const location = req.body.location;
  const url = `${baseUrl}?q=${location}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    res.json(data); // Send JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
