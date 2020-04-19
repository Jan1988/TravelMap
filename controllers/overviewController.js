const 
    journeyService = require('../services/journeyService'),
    imgService = require('../services/imgService'),
    path = require('path');

exports.getOverview = function(req, res){
    let teaserImgs = {};

    journeyService.getAll()
    .then(journeys => {

        journeys.forEach(function(journey, i, journeys){
            let folder = path.join(journey.name, '_teaser');
            let rndImgPath = imgService.getRndImg(folder);
            teaserImgs[journey._id] = rndImgPath;
        });
        res.render('overview', {journeys, teaserImgs});
    })
    .catch(err => {
        res.status(500);
        res.end("Error: " + err.message);
    });
}