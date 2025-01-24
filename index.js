const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'Homepage' folder
app.use(express.static(path.join(__dirname, 'Homepage')));

// Fallback for unknown routes to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Homepage', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
