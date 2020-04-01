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


var kommandozeile = process.argv;
console.log(kommandozeile);

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



// Import routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// middleware libraries
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});

// app.use(express.static(__dirname + '/public'));
// app.use(require('./middlewares/users'));



// app.get('/', function(req, res) {
//     var indexPath = 'C:/xampp/htdocs/TravelMap - Node.js/testin2.html';
//     fs.exists(indexPath, function (exist) {
//         if(!exist) {
//           // if the file is not found, return 404
//           res.statusCode = 404;
//           res.end(`File ${indexPath} not found!`);
//           return;
//         }
    
//         // if is a directory search for index file matching the extention
//         if (fs.statSync(indexPath).isDirectory()) indexPath += '/index' + ext;
    
//         // read file from file system
//         fs.readFile(indexPath, function(err, data){
//           if(err){
//             res.statusCode = 500;
//             res.end(`Error getting the file: ${err}.`);
//           } else {
//             // if the file is found, set Content-type and send data
//             res.setHeader('Content-type', 'text/html' || 'text/plain' );
//             res.end(data);
//           }
//         });
//       });
// });
// Use Api routes in the App