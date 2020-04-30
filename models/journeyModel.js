
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var waypointSchema = mongoose.Schema({
    name: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    arrivalDate: {type: Date},
    arrivalDay: {type: Number},
    transport: {type: String, required: true},
    hasImages: {type: Boolean}
});

var journeySchema = mongoose.Schema({
    name: {type: String, required: true},
    teaserText: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    waypoints: [waypointSchema]
});
// Export Contact model
var Journey = module.exports = mongoose.model('Journey', journeySchema);
module.exports.get = function (callback, limit) {
    Journey.find(callback).limit(limit);
};
