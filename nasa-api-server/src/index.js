const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
const nasaapi = require('./nasaapi');

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(nasaapi());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '../dist/nasa-api-ng'));

app.get('/*', function(req,res) {
    
  res.sendFile(path.join(__dirname+'../dist/nasa-api-ng/index.html'));
  });

mongoose.connect(`mongodb://localhost:27017/nasaapi`)
.then(() => {
  console.log('Connected to database');
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});