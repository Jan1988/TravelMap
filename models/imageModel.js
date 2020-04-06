var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Setup schema
var imageSchema = mongoose.Schema({
    name: {type: String, required: true},

});
// var Player = mongoose.model('player', playerSchema);

// Export Contact model
var Image = module.exports = mongoose.model('Image', imageSchema);
module.exports.get = function (callback, limit) {
    Image.find(callback).limit(limit);
};