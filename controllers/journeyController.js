// Import player model
const Journey = require('../models/journeyModel');
const
    helpers = require('../services/helpersService'),
    journeyService = require('../services/journeyService');


exports.update = function(req, res){

    // console.log(req.body, req.params)
    journeyService.getById(req.params.journey_id)
        .then(function(journey){
            
            let updatedJourney = journeyService.createJourney(req.body, journey)

            updatedJourney.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Journey updated!',
                    data: updatedJourney
                });
            });
        }).catch(err => {
            res.json({
                status: "error",
                message: err,
            });
        });
}

exports.create = function(req, res){
     let journey = journeyService.createJourney(req.body, new Journey());

console.log(journey)

    // save journey and check for errors
    journey.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New journey created!',
            data: journey
        });
    });
};

exports.delete = function (req, res) {
    Journey.deleteOne({ _id: req.params.journey_id }, function(err){
        if (err)
            res.json(err);
        res.json({
            message: 'Journey deleted!',
            data: req.params.journey_id
        });
    });
};

// exports.readData = function(req, res){
//     console.log("read Data")
//     console.log(helpers.waypointData.length)
    
//     helpers.waypointData.forEach(function(subGroup, i){
//         subGroup.forEach(function(waypoint, j){
//             let waypointObj = {
//                 name: waypoint.name,
//                 arrivalDate: "",
//                 lat: waypoint.lat,
//                 lng: waypoint.lng,
//                 transport: waypoint.id
//             };
//             console.log(waypoint);
//             // waypoint = {name: "", date: "", lat: "", lng: "", transport: ""};
//             res.render('partials/waypointRow', {waypointObj})
//         })
//     })


// }