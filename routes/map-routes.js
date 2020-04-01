const express = require("express");
const router = express.Router();
require('dotenv').config();


router.get('/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    let googleMapsKey = process.env.MAP_API_KEY;
    console.log(googleMapsKey);
    // res.sendFile(path.join(process.cwd(), 'views', 'map.html'));
});

module.exports = router;