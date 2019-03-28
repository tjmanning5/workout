var exerciseController = require('../controllers/exerciseController');
var liftController = require('../controllers/liftController');
var workoutController = require('../controllers/workoutController');
var Exercise = require('../models/exerciseModel');
var Lift = require('../models/liftModel');
var Workout = require('../models/workoutModel');

module.exports = function (app) {

    //exercise
    app.post('/exercise', exerciseController.createOne);
    app.get('/exercise/:_id', exerciseController.readOne);
    app.get('/exercises', exerciseController.readMany);
    app.put('/exercise', exerciseController.updateOne);
    app.delete('/exercise/:_id', exerciseController.deleteOne);

    //lift
    app.post('/lift', liftController.createOne);
    app.get('/lift/:_id', liftController.readOne);
    app.get('/lifts', liftController.readMany);
    app.put('/lift', liftController.updateOne);
    app.delete('/lift/:_id', liftController.deleteOne);

    //workout
    app.post('/workout', workoutController.createOne);
    app.get('/workout/:_id', workoutController.readOne);
    app.get('/workouts', workoutController.readMany);
    app.put('/workout', workoutController.updateOne);
    app.put('/workout/add_exercise', workoutController.addExercise);
    app.put('/workout/remove_exercise', workoutController.removeExercise);
    app.delete('/workout/:_id', workoutController.deleteOne);

    //frontend routes

    // home
    app.get('/', function (req, res) {

        Exercise.find({}, function (err, results) {

            if (err) throw err;

            var exercises = results;

            Lift.find({})
            .populate('exercise_id')
            .sort({ time: -1 })
            .limit(8)
            .exec(function (err, results) {

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
    });

    // excercise name



};