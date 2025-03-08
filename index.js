const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the products data as JSON
app.get('/products.json', (req, res) => {
  fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading products data');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


