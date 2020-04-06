// Import express
const express = require('express');
// Import Mongoose
let mongoose = require('mongoose');
// Import Body parser
let bodyParser = require('body-parser');
// Initialise the app
const app = express();
// Setup server port
require('dotenv').config();
const port = process.env.PORT || 3000;
//import path
const path = require('path');
//import Routs
const apiRoutes = require("./routes/api-routes.js");
const viewRoutes = require("./routes/view-routes.js");
const mapRoutes = require("./routes/map-routes.js");


// var kommandozeile = process.argv;
// console.log(kommandozeile);

app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, 'views'));

// app.use(function(req, res, next){
//   console.log(req.url);
//   // res.writeHead(401);
//   // res.end('Permission denied');
//   next();
// });

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

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true},
  function () {
      console.log("DB is running");
  }
);

app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});


