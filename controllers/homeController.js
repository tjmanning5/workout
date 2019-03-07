var Exercise = require('../models/exerciseModel');
var Lift = require('../models/liftModel');
var Workout = require('../models/workoutModel');

let controller = {

    index: function (req, res) {

        Exercise.find({}, function (err, results) {


            if (err) throw err;

            var exercises = results;

            Lift.find({}, function (err, results) {

                if (err) throw err;

                var lifts = results;

                Workout.find({}, function (err, results) {

                    if (err) throw err;

                    var workouts = results;

                    res.render('home', {
                        exercises: exercises,
                        lifts: lifts,
                        workouts: workouts
                    });
                });
            });
        });
    },
};

module.exports = controller;