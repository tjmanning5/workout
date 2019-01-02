var Workout = require('workoutModel.js');

module.exports = function (app) {

    app.post('/api/workout', function (req, res) {

        var NewWorkout = {
            workoutName: req.body.workoutName
        }

        Workout.create(NewWorkout, function (err, result) {
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

            if(req.body.workoutName) {
                result.workoutName = req.body.workoutName;
            }
            if (req.body.exercises) {
                result.exercises = req.body.exercises;
            }
            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });
        });
    });

    app.delete('/api/workout', function (req, res) {
        Workout.findOne({ _id: req.body.id }, function (err, result) {
            if(err) throw err;

            res.status(204);
            res.end();
        });
    });
}