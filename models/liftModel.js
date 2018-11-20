var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var liftSchema = new Schema({
    set: {
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
            default: Date.now
        }
    }
});

var Lift = mongoose.model('lift', liftSchema);

module.exports = Lift;