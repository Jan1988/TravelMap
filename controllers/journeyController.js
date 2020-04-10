// Import player model
Journey = require('../models/journeyModel');

exports.update = function(req, res){
    console.log(req.body)
    Journey.findById(req.params.journey_id, function (err, journey) {
        if (err) res.send(err);

        journey.name = req.body.journeyName;
        journey.startDate = new Date();
        journey.endDate = new Date();
        journey.waypoints = [];

        // if(Array.isArray(req.body.wayPointName)){
            for(let i = 0; i < req.body.wayPointName.length; i++){
                console.log(req.body.transport[i]);
                let waypoint = {
                    name: req.body.wayPointName[i],
                    arrivalDate: new Date(),
                    latitude: 123,
                    longitude: 345,
                    transport: req.body.transport[i] !== "" ? req.body.transport[i] : "-"
                };
                journey.waypoints.push(waypoint);
            }
        // }else{
        //     let waypoint = {
        //         name: req.body.wayPointName,
        //         arrivalDate: req.body.date,
        //         latitude: req.body.latitude,
        //         longitude: req.body.longitude,
        //         transport: req.body.artOfTransportation
        //     };
        //     journey.waypoints.push(waypoint);
        // }
    
        // console.log(journey);
        // save the journey and check for errors
        journey.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'New journey created!',
                data: journey
            });
        });
    })
}

exports.create = function(req, res){

    var journey = new Journey();
    journey.name = req.body.journeyName;
    journey.startDate = new Date();
    journey.endDate = new Date();
    journey.waypoints = []

    // journey.name = "Testreise 2";
    // journey.startDate = new Date();
    // journey.endDate = new Date();
    // journey.waypoints = [{
    //         name: 'Mannheim',
    //         arrivalDate: new Date(),
    //         latitude: 12,
    //         longitude: 34,
    //         transport: 'ZUG'
    //     },
    //     {
    //         name: 'Frankfurt',
    //         arrivalDate: new Date(),
    //         latitude: 12,
    //         longitude: 34,
    //         transport: 'ZUG'
    //     }
    // ];



    for(let i = 0; i < req.body.wayPointName.length; i++){
        let waypoint = {
            name: req.body.wayPointName[i],
            arrivalDate: new Date(),
            latitude: 123,
            longitude: 345,
            transport: req.body.artOfTransportation[i]
        };
        journey.waypoints.push(waypoint);
    }

    console.log(journey);
    // save journey and check for errors
    journey.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New manager created!',
            data: journey
        });
    });
};