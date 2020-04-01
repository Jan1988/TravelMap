// Import express
const express = require('express');
// Import Mongoose
// let mongoose = require('mongoose');
// Import Body parser
let bodyParser = require('body-parser');
// Initialise the app
const app = express();
// Setup server port
const port = process.env.port || 3000;
//import path
const path = require('path');
//import Routs
const apiRoutes = require("./routes/api-routes.js");
const viewRoutes = require("./routes/view-routes.js");
const mapRoutes = require("./routes/map-routes.js");


// var kommandozeile = process.argv;
// console.log(kommandozeile);

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



// Import routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes);
app.use('/map', mapRoutes);

// middleware libraries
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});

// app.use(express.static(__dirname + '/public'));
// app.use(require('./middlewares/users'));

