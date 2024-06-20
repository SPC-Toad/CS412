require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware
const app = express();
const ps6Router = require('./routes/ps6-node');

app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML file
app.use(express.static(path.join(__dirname, 'views')));

// Use ps6 routes
app.use('/ps6', ps6Router);

// Route to render HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
