// Import player model
Journey = require('../models/journeyModel');
const helpers = require('../services/helpersService');

const getAll = async function(){
    return await Journey.find({});
}

const getById = async function(journeyId){
    return await Journey.findOne({_id:journeyId})
}

const createJourney = function(params, journey){
    journey.name = params.journeyName;
    journey.startDate = new Date();
    journey.endDate = new Date();
    journey.waypoints = [];
    
    for(let i = 0; i < params.wayPointName.length; i++){
        let formatArrivalDate = helpers.formatDate(params.arrivalDate[i]);
        let waypoint = {
            name: params.wayPointName[i],
            arrivalDate: formatArrivalDate,
            lat: params.lat[i],
            lng: params.lng[i],
            transport: params.transport[i] !== "" ? params.transport[i] : "-"
        };
        journey.waypoints.push(waypoint);
    }
    return journey;
}

module.exports = {
    getAll,
    getById,
    createJourney
}