const express = require("express");
const router = express.Router();
const path = require('path');

// Set default API response
router.get('/', function (req, res) {
    // res.sendFile(path.join(process.cwd(), 'views', 'holidayForm.html'));
    const dummyData = [
        {
            name: "Norwegen",
            rndImage: "/images/Kala Patthar/DSC03273.jpg"
        },
        {
            name: "Große Reise",
            rndImage: "/images/Guilin/2017-09-20_1525_067.jpg"
        },
        {
            name: "Spanien",
            rndImage: "/images/Lukla/DSC03553.jpg"
        }
    ];
    res.render('overview', {dummyData});
});



router.get('/form/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.render('form', {});
});

router.get('/map/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.render('map', {});
});
// Export API routes
module.exports = router;