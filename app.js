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
const viewRoutes = require("./routes");
//import session package
const session = require('express-session');


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// middleware libraries
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'Please_SET_Session_SeCrEt',
  resave: false,
  saveUninitialized: true
}))
//isAdmin als local setzen
app.use(function(req, res, next){
  res.locals.isAdmin = req.session && req.session.isAdmin;
  next();
})

app.set('view engine', 'ejs');
// Import routes
app.use('/', viewRoutes);

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


