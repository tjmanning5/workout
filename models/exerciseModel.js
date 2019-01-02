var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
    },
    workout: {
        type: ObjectId,
        ref: "Workout",
        required: false
    }
});

var Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;