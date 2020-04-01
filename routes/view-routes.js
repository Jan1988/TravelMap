const express = require("express");
const router = express.Router();
const path = require('path');

// Set default API response
router.get('/', function (req, res) {
    // res.sendFile(path.join(process.cwd(), 'views', 'holidayForm.html'));
    res.sendFile(path.join(process.cwd(), 'views', 'overview.html'));
});



router.get('/form/', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.sendFile(path.join(process.cwd(), 'views', 'form.html'));
});

// Export API routes
module.exports = router;