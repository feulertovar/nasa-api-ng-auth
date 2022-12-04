const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
const nasaapi = require('./nasaapi');

const uri = process.env.MONGODB_URI;

// Connecting with mongo db
mongoose
  .connect('mongodb+srv://feuler:TytuHposkYpc5MG7@cluster0.ebkhbv8.mongodb.net/nasaapi?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

// Setting up port with express js
//const employeeRoute = require('../backend/routes/employee.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(bodyParser.json())
app.use(bearerToken())
app.use(oktaAuth)
app.use(nasaapi());

// Serve only the static files form the dist directory
app.use(express.static('../../dist/nasa-api-ng'));
app.get('/*', function(req,res) {
    
  res.sendFile(path.resolve('../../dist/nasa-api-ng/index.html'));
  });
//app.use('/api', employeeRoute)  
// Create port
const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})