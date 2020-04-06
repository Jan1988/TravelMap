
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waypointSchema = mongoose.Schema({
    name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    arrivalDate: {type: Date, required: true},
    transport: {type: String, required: true}
});
// // Export Waypoint model
// var Waypoint = module.exports = mongoose.model('Waypoint', waypointSchema);
// module.exports.get = function (callback, limit) {
//     Waypoint.find(callback).limit(limit);
// };
// Setup schema
var journeySchema = mongoose.Schema({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    waypoints: [waypointSchema]
});
// Export Contact model
var Journey = module.exports = mongoose.model('Journey', journeySchema);
module.exports.get = function (callback, limit) {
    Journey.find(callback).limit(limit);
};
