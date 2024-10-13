const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all origins and credentials
app.use(cors({ origin: true, credentials: true }));

// Serve static files (for .jsonld files)
app.use('/data', express.static(path.resolve(__dirname, 'data')));

// Serve JSON-LD data for specific routes
app.get('/blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'blog.jsonld'));
});

app.get('/jobposting', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'jobposting.jsonld'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'testimonial.jsonld'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'data', 'about.jsonld'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
