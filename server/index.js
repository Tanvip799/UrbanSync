// index.js
const express = require('express'); // Import the insertDocument function

// Create an Express application
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the port on which the server will run
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
