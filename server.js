const express = require('express');
const path = require('path');
const app = express();
const port =  3000;

// Serve JSON-LD data
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'blog.jsonld'));
});

app.get('/jobposting', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'jobposting.jsonld'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'testimonial.jsonld'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'about.jsonld'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

