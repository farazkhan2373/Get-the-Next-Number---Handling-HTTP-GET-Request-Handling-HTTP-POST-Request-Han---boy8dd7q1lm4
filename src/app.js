const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }

app.get('/api/get-next-num', (req, res) => {
  // Check if the 'num' property exists in the request body
  if (!req.body || !req.body.num || typeof req.body.num !== 'number') {
    return res.status(400).json({ message: 'Invalid input. Please provide a valid number.', status: 'failure' });
  }

  // Get the number from the request body
  const currentNumber = req.body.num;

  // Calculate the next number
  const nextNumber = currentNumber + 1;

  // Respond with the next number and success status
  res.json({ message: nextNumber, status: 'success' });
});

module.exports = app;
