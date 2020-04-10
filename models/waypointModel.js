
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waypointSchema = mongoose.Schema({
    name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    arrivalDate: {type: Date, required: true},
    transport: {type: String, default: ''}
});
// Export Waypoint model
var Waypoint = module.exports = mongoose.model('Waypoint', waypointSchema);
module.exports.get = function (callback, limit) {
    Waypoint.find(callback).limit(limit);
};