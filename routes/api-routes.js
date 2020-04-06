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
    // res.sendFile(path.join(process.cwd(), 'views', 'partials', 'waypointRow.ejs'), );
    waypoint = {name: "", date: "", latitude: "", longitude: "", transport: ""};
    res.render('partials/waypointRow', {waypoint})
});


const Journey = require('../models/journeyModel');

router.get('/journey/:journey_id', function(req, res){
    Journey.findById(req.params._id, function (err, journey) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player details loading..',
            data: journey
        });
    });
});




router.post('/journey/create', function(req, res){
    
    let journey = new Journey()
    journey.name = req.body.journeyName;
    journey.startDate = new Date();
    journey.endDate = new Date();
    journey.waypoints = [];
    
    if(Array.isArray(req.body.wayPointName)){
        for(let i = 0; i < req.body.wayPointName.length; i++){
            let waypoint = {
                name: req.body.wayPointName[i],
                arrivalDate: req.body.date[i],
                latitude: req.body.latitude[i],
                longitude: req.body.longitude[i],
                transport: req.body.artOfTransportation[i]
            };
            journey.waypoints.push(waypoint);
        }
    }else{
        let waypoint = {
            name: req.body.wayPointName,
            arrivalDate: req.body.date,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            transport: req.body.artOfTransportation
        };
        journey.waypoints.push(waypoint);
    }
    
    console.log(journey);
    // save the player and check for errors
    journey.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New journey created!',
            data: journey
        });
    });
    
});

// Export API routes
module.exports = router;