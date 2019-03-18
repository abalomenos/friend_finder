
// Import Express Module
var express = require('express');

// Create Express Server
var app = express();

// Set up port
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing Files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener to start our server 
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
