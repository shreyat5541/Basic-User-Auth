const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Example: Define a route
app.get('/', (req, res) => {
    res.send('Hello,Tree Adopter!');
  });
  