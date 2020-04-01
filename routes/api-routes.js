const express = require("express");
const router = express.Router();
const path = require('path');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

let imgController = require('../controllers/imgController')

router.route('/rndImg/').get(imgController.getWaypointRndImg);
router.route('/allImg/').get(imgController.getWaypointImgs);

router.get('/formWaypointRow', function (req, res) {
    res.sendFile(path.join(process.cwd(), 'views', 'snippets', 'formWaypointRow.html'));
});

router.post('/journey/create', function(req, res){
    let createData = req.query;
    console.log(req.body);
    res.send("nothing");
});

// Export API routes
module.exports = router;