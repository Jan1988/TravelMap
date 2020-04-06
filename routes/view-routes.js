const express = require("express");
const router = express.Router();
const Journey = require('../models/journeyModel');

let journeysObj;


// Set default API response
router.get('/', function (req, res) {

    Journey.get(function (err, journeys) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        let isAdmin = true
        journeysObj = journeys
        res.render('overview', {journeys, isAdmin});
    });
});



router.get('/form/', function (req, res) {
    res.render('form', {});
});
router.get('/form/:journey_id', function (req, res) {
    Journey.findById(req.params.journey_id, function (err, journey) {
        if (err)
            res.send(err);
        console.log(journey);
        res.render('form', {journey});
    });
});

router.get('/map/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.render('map', {});
});
// Export API routes
module.exports = router;