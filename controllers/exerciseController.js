var Exercise = require('exerciseModel.js');

module.exports = function (app) {

    app.post('/api/exercise', function (req, res) {

        var NewExercise = {
            exerciseName: req.body.exerciseName,
            workout: req.body.workout
        }

        Exercise.create(NewExercise, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/exercise/:_id', function (req, res) {
        Exercise.findOne({ _id: req.query.id }, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/exercises', function (req, res) {
        Exercise.find({}, function (err, results) {
            if (err) throw err;

            res.json(results);
        });
    });

    app.put('/api/exercise', function (req, res) {
        Exercise.findOne({ _id: req.body.id }, function (err, result) {

            if (err) throw err;

            if (req.body.exerciseName) {
                result.exerciseName = req.body.exerciseName;
            }
            if (req.body.sets) {
                result.sets = req.body.sets;
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });

        });
    });

    app.delete('/api/exercise', function (req, res) {
        Exercise.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    });
}
