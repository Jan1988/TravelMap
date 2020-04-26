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
    let arrivalDay;
    let formatArrivalDate;
    let waypoint = {};
    const startDate = new Date(params.arrivalDate[0]);

    journey.name = params.journeyName;
    journey.waypoints = [];
    
    for(let i = 0; i < params.wayPointName.length; i++){
        formatArrivalDate = helpers.formatDate(params.arrivalDate[i]);
        arrivalDay = helpers.millisToDays(new Date(params.arrivalDate[i]) - startDate) + 1;

        waypoint = {
            name: params.wayPointName[i],
            arrivalDate: formatArrivalDate,
            arrivalDay: arrivalDay,
            lat: params.lat[i],
            lng: params.lng[i],
            transport: params.transport[i] !== "" ? params.transport[i] : "-"
        };
        journey.waypoints.push(waypoint);
    }
    
    journey.startDate = journey.waypoints[0].arrivalDate;
    journey.endDate = journey.waypoints[params.wayPointName.length-1].arrivalDate;
    
    return journey;
}

module.exports = {
    getAll,
    getById,
    createJourney
}