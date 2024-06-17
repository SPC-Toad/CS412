const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.render('index', { message: 'Hey now' });
    console.log("GET request received");
  })
  .post('/', (req, res) => {
    console.log('POST request received with body:', req.body);
    const inputString = req.body.inputString;
    if (inputString) {
      res.render('index', { message: inputString, length: inputString.length });
    } else {
      res.render('index', { message: 'No input received', length: 0 });
    }
  });

// GET route that takes a URL parameter
router.get('/:name', (req, res) => {
  const name = req.params.name;
  res.render('index', { message: `Hello there, ${name}. How can we help?` });
});

module.exports = router;
