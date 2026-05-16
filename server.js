const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Handle requests for PDF file
app.get('/VALAVAN K P Resume with photo.pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'VALAVAN K P Resume with photo.pdf'));
});

// Optional: Handle requests for index.html explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});