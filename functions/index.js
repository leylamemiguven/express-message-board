const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware and routes
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from Netlify!');
});

// Export the handler
module.exports.handler = serverless(app);
