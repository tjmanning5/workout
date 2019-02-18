var Workout = require('../models/workoutModel');

module.exports = function (app) {

    app.post('/api/workout', function (req, res) {

        var newWorkout = {
            name: req.body.name,
            exercise_id: req.body.exercise_id
        }

        Workout.create(newWorkout, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/workout/:_id', function (req, res) {
        Workout.findOne({ _id: req.query.id }, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/workouts', function (req, res) {
        Workout.find({}, function (err, results) {
            if (err) throw err;

            res.json(results);
        });
    });

    app.put('/api/workout', function (req, res) {
        Workout.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            if (req.body.name) {
                result.name = req.body.name;
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });
        });
    });

    app.put('/api/workout/add_exercise', function (req, res) {
        Workout.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            if (req.body.exercise_id) {
                if (result.exercise_id.indexOf(req.body.exercise_id) === -1) {
                    result.exercise_id.push(req.body.exercise_id);
                }
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });
        });
    });

    app.put('/api/workout/remove_exercise', function (req, res) {
        Workout.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            if (req.body.exercise_id) {
                var index = result.exercise_id.indexOf(req.body.exercise_id);

                if (index > -1) {
                    result.exercise_id.splice(index, 1);
                }
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });
        });
    });

    app.delete('/api/workout', function (req, res) {
        Workout.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    });
}