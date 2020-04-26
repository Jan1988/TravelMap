const
    router = require("express").Router(),
    imgController = require('../controllers/imgController'),
    journeyController = require('../controllers/journeyController'),
    overviewController = require('../controllers/overviewController'),
    loginController = require('../controllers/loginController'),
    formController = require('../controllers/formController'),
    Journey = require('../models/journeyModel'),
    authMiddleware = require('../middleware/authMiddleware'),
    helpers = require('../services/helpersService'),
    journeyService = require('../services/journeyService'),
    path = require('path');
    
require('dotenv').config();


// Set default API response
router.get('/', overviewController.getOverview);
router.get('/mapTest', function(req, res){
    let googleMapsKey = process.env.MAP_API_KEY;
    res.render('mapTest', {googleMapsKey});
});

// Set default API response
router.get('/api', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
router.get('/api/rndImg', imgController.getInfoWindow);
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
router.get('/api/readData', helpers.readWaypoints);

router.get('/login', loginController.renderLogin);
router.post('/login', loginController.submitLogin);
router.get('/logout', loginController.logout);

router.get('/form/', formController.sendForm);
router.get('/form/:journey_id', formController.sendForm);

router.post('/form', journeyController.create);
router.patch('/form/:journey_id', journeyController.update);
router.delete('/form/:journey_id', journeyController.delete);

router.get('/map/:journey_id', function (req, res) {
    let googleMapsKey = process.env.MAP_API_KEY;
    res.render('map', {googleMapsKey, journey_id: req.params.journey_id});
});

// Export API routes
module.exports = router;