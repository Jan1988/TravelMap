// Import player model
Journey = require('../models/journeyModel');
const
    fs = require('fs'),
    path = require('path'),
    helpers = require('../services/helpersService');


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
    journey.teaserText = params.teaserText;
    journey.waypoints = [];
    
    for(let i = 0; i < params.wayPointName.length; i++){
        // formatArrivalDate = helpers.formatDate(params.arrivalDate[i]);
        formatArrivalDate = params.arrivalDate[i];
        arrivalDay = helpers.millisToDays(new Date(params.arrivalDate[i]) - startDate) + 1;

        waypoint = {
            name: params.wayPointName[i],
            arrivalDate: formatArrivalDate,
            arrivalDay: arrivalDay,
            lat: params.lat[i],
            lng: params.lng[i],
            transport: params.transport[i] !== "" ? params.transport[i] : "-",
            hasImages: hasImages(journey.name, params.wayPointName[i])
        };
        // console.log(waypoint);
        journey.waypoints.push(waypoint);
    }
    
    journey.startDate = helpers.formatDateGerman(journey.waypoints[0].arrivalDate);
    journey.endDate = helpers.formatDateGerman(journey.waypoints[params.wayPointName.length-1].arrivalDate);
    
    return journey;
}
function hasImages(journeyName, waypointName){
    let folderPath = path.join(process.cwd(), 'public', 'images', journeyName, waypointName);
    if(!fs.existsSync(folderPath)) return false;
    dirs = fs.readdirSync(folderPath);
    if(!dirs.length) return false;
    return true;
}

module.exports = {
    getAll,
    getById,
    createJourney
}