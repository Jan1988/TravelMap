const express = require("express");
const router = express.Router();

router.get('/map', function (req, res) {
    // console.log(req.params.view);
    // let viewFile = req.params.view;
    res.sendFile(path.join(process.cwd(), 'views', 'map.html'));
});