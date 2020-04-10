const router = require("express").Router();

const imgController = require('../controllers/imgController')
const journeyController = require('../controllers/journeyController')
const loginController = require('../controllers/loginController')
const Journey = require('../models/journeyModel');
require('dotenv').config();


// Set default API response
router.get('/', function (req, res) {
    console.log("overview")
    Journey.get(function (err, journeys) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.render('overview', {journeys});
    });
});

// Set default API response
router.get('/api', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
router.route('/api/rndImg').get(imgController.getWaypointRndImg);
router.route('/api/allImg').get(imgController.getWaypointImgs);
router.get('/api/formWaypointRow', function (req, res) {
    waypoint = {name: "", date: "", latitude: "", longitude: "", transport: ""};
    res.render('partials/waypointRow', {waypoint})
});
router.get('/api/journey/:journey_id', function (req, res) {
    Journey.findById(req.params.journey_id, function (err, journey) {
        if (err) res.send(err);
        res.json({
            message: 'New journey created!',
            data: journey
        });
    });
})


router.get('/login', loginController.renderLogin);
router.post('/login', loginController.submitLogin);
router.get('/logout', loginController.logout);

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

router.post('/form/create', journeyController.create);
router.patch('/form/edit/:journey_id', journeyController.update);
router.get('/form/:journey_id', function (req, res) {
    let mode = "edit";
    Journey.findById(req.params.journey_id, function (err, journey) {
        if (err)
            res.send(err);
        res.render('form', {journey, mode});
    });
});

router.get('/map', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    let googleMapsKey = process.env.MAP_API_KEY;
    // console.log(googleMapsKey);
    // res.sendFile(path.join(process.cwd(), 'views', 'map.html'));
    res.render('map', {});
});

// Export API routes
module.exports = router;