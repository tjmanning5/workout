var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    exercise_id: [{
        type: ObjectId,
        ref: 'Exercise', 
        required: false
    }]

    //mental note, this might cause the array to equal null

});

var Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;