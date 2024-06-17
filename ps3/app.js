const express = require('express');
const path = require('path');
const app = express();
const ps3Router = require('./routes/ps3');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ps3', ps3Router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = app;
