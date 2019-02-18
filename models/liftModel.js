var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var liftSchema = new Schema({
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    excercise_id: {
        type: ObjectId,
        ref: 'Exercise',
        required: true
    }
});

var Lift = mongoose.model('lift', liftSchema);

module.exports = Lift;