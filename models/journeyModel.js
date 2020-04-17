
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waypointSchema = mongoose.Schema({
    name: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    arrivalDate: {type: String},
    transport: {type: String, required: true}
});

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
