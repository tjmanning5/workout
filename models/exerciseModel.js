var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    }
    
});

var Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;