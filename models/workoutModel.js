var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    workoutName: {
        type: String,
        required: true
    }, 
    exercises: {
        type: ObjectId,
        ref: 'Exercise', 
        required: false
    }
});

var Exercise = mongoose.model('workout', workoutSchema);

module.exports = Workout;