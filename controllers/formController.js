const 
    journeyController = require('../controllers/journeyController'),
    journeyService = require('../services/journeyService');

const sendForm = function(req, res){
    
    if(req.params.journey_id){
        let mode = "edit";
        journeyService.getById(req.params.journey_id)
            .then(function(journey){
                
                res.render('form', {journey, mode});
            }).catch(err => {
                res.status(500);
                res.end("Error: " + err.message);
            });
    }else{
        let mode = "create";
        let journey = {
            name: "",
            startDate: "",
            endDate: "",
            waypoints: []
        }
        res.render('form', {journey, mode});
    }


}

module.exports = {
    sendForm
}