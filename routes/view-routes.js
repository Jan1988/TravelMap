const express = require("express");
const router = express.Router();
const Journey = require('../models/journeyModel');

const journeyController = require('../controllers/journeyController')


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
        res.render('overview', {journeys, isAdmin});
    });
});



router.get('/form/', function (req, res) {
    let mode = "create";
    let journey = {
        name: "",
        startDate: "",
        endDate: "",
        waypoints: []
    }
    res.render('form', {journey, mode});
});

router.get('/form/:journey_id', function (req, res) {
    let mode = "edit";
    Journey.findById(req.params.journey_id, function (err, journey) {
        if (err)
            res.send(err);
        res.render('form', {journey, mode});
    });
});


router.get('/map/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.render('map', {});
});
// Export API routes
module.exports = router;