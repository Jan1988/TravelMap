const router = require("express").Router();

const imgController = require('../controllers/imgController')
const journeyController = require('../controllers/journeyController')

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

router.route('/rndImg/').get(imgController.getWaypointRndImg);
router.route('/allImg/').get(imgController.getWaypointImgs);

router.get('/formWaypointRow', function (req, res) {
    waypoint = {name: "", date: "", lat: "", lng: "", transport: ""};
    res.render('partials/waypointRow', {waypoint})
});


router.post('/journey/', journeyController.create);
router.patch('/journey/:journey_id', journeyController.update);





// Export API routes
module.exports = router;