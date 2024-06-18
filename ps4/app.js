require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const ps4Router = require('./routes/ps4');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML file
app.use(express.static(path.join(__dirname, 'views')));

// Use ps4 routes
app.use('/ps4', ps4Router);

// Route to render HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
