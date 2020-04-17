const
    router = require("express").Router(),
    imgController = require('../controllers/imgController'),
    journeyController = require('../controllers/journeyController'),
    loginController = require('../controllers/loginController'),
    formController = require('../controllers/formController'),
    Journey = require('../models/journeyModel'),
    authMiddleware = require('../middleware/authMiddleware'),
    helpers = require('../services/helpersService'),
    journeyService = require('../services/journeyService'),
    path = require('path');
require('dotenv').config();


// Set default API response
router.get('/', function (req, res) {
    journeyService.getAll()
        .then(journeys => {
            res.render('overview', {journeys});
        })
        .catch(err => {
            res.status(500);
            res.end("Error: " + err.message);
        });
});

// Set default API response
router.get('/api', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
router.get('/api/rndImg', imgController.getWaypointRndImg);
router.get('/api/allImg', imgController.getWaypointImgs);
router.get('/api/formWaypointRow', function (req, res) {
    waypoint = {name: "", date: "", lat: "", lng: "", transport: ""};
    res.render('partials/waypointRow', {waypoint})
});
// router.get('/api/journey', journeyController.view);
router.get('/api/journey/:journey_id', function(req, res){
    journeyService.getById(req.params.journey_id)
        .then(function(response){
            res.send(response)
        });
});


router.get('/login', loginController.renderLogin);
router.post('/login', loginController.submitLogin);
router.get('/logout', loginController.logout);

router.get('/form/', formController.sendForm);
router.get('/form/:journey_id', formController.sendForm);

router.post('/form', journeyController.create);
router.patch('/form/:journey_id', journeyController.update);
router.delete('/form/:journey_id', journeyController.delete);

router.get('/api/readData', function(req, res){
    // console.log(helpers.waypointData.length)
    let fullHtmlString = "";

    helpers.waypointData.forEach(function(subGroup, i){
        subGroup.forEach(function(waypointIn, j){
            let station = helpers.stations.find(function(station){
                return station.name === waypointIn.name;
            });

            let newDateString = ""
            if(station){
                let splitedDate = station.dateOfArrival.split("-")
                newDateString = "2017-" + splitedDate[1] + "-" + splitedDate[0];
            }
            
            let waypoint = {
                name: waypointIn.name,
                arrivalDate: newDateString,
                lat: waypointIn.lat,
                lng: waypointIn.lng,
                transport: waypointIn.id
            };

            // const rowPath = path.join(process.cwd(), 'views', 'partials', 'waypointRow.ejs' );
            // waypoint = {name: "", date: "", lat: "", lng: "", transport: ""};
            res.render('partials/waypointRow', {waypoint}, function(err, html){
                fullHtmlString += html;
            });

        })
    })
    
    res.send(fullHtmlString);
});


router.get('/map/:journey_id', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    let googleMapsKey = process.env.MAP_API_KEY;
    // console.log(googleMapsKey);
    // res.sendFile(path.join(process.cwd(), 'views', 'map.html'));
    res.render('map', {googleMapsKey, journey_id: req.params.journey_id});
});


// Export API routes
module.exports = router;