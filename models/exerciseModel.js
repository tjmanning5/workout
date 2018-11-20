var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
    },
    sets: {
        type: ObjectId,
        ref: 'Lift',
        required: false
    }
});

var Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;