const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');
const request = require('request');
const path = require('path');

// Import your API key from a config file
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to render HTML result
const renderHTMLResult = (res, data) => {
  const weatherDataHTML = `
    <h1>Weather in ${data.name}</h1>
    <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='weather icon'>
    <p>${data.weather[0].main} - ${data.weather[0].description}</p>
    <p>Temperature: ${Math.floor(data.main.temp - 273.15)}&deg;C</p>
    <p>Feels Like: ${Math.floor(data.main.feels_like - 273.15)}&deg;C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <a href="/">Back to Home</a>
  `;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weather Result</title>
    </head>
    <body>
      ${weatherDataHTML}
    </body>
    </html>
  `);
};

// Route to handle weather data fetch using Promises
router.post('/weather-promise', (req, res) => {
  const location = req.body.location;
  const url = `${baseUrl}?q=${location}&appid=${apiKey}`;

  axios.get(url)
    .then(response => {
      renderHTMLResult(res, response.data);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to handle weather data fetch using async/await
router.post('/weather-async', async (req, res) => {
  const location = req.body.location;
  const url = `${baseUrl}?q=${location}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    renderHTMLResult(res, data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle weather data fetch using callbacks
router.post('/weather-callback', (req, res) => {
  const location = req.body.location;
  const url = `${baseUrl}?q=${location}&appid=${apiKey}`;

  request(url, { json: true }, (error, response, body) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    renderHTMLResult(res, body);
  });
});

module.exports = router;
