const express = require('express');
const router = express.Router();

const http = require('http');
const url = require('url');
const fs = require('fs');

module.exports = http.createServer(function(req, res){
    console.log("create Server");
    var service = require('../server/services/service.js');
    const reqUrl = url.parse(req.url, true);


    if (reqUrl.pathname == '/'){
        var indexPath = 'C:/xampp/htdocs/TravelMap - Node.js/testin2.html';
        fs.exists(indexPath, function (exist) {
            if(!exist) {
              // if the file is not found, return 404
              res.statusCode = 404;
              res.end(`File ${indexPath} not found!`);
              return;
            }
        
            // if is a directory search for index file matching the extention
            if (fs.statSync(indexPath).isDirectory()) indexPath += '/index' + ext;
        
            // read file from file system
            fs.readFile(indexPath, function(err, data){
              if(err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
              } else {
                // if the file is found, set Content-type and send data
                res.setHeader('Content-type', 'text/html' || 'text/plain' );
                res.end(data);
              }
            });
          });
    
    // GET Endpoint
    }else if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);

    // POST Endpoint
    } else if (reqUrl.pathname == '/create' && req.method === 'POST') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.createRequest(req, res);

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        // service.invalidRequest(req, res);

    }
});
