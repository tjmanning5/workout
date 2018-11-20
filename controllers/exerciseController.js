var Exercise = require('exerciseModel.js');

module.exports = function (app) {

    app.post('/exercise', function (req, res) {

        var NewExercise = {
            exerciseName: req.body.exerciseName
        }

        Exercise.create(NewExercise, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/exercise:_id', function (req, res) {
        Exercise.findOne({ _id: req.query.id }, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/exercises', function (req, res) {
        Exercise.find({}, function (err, results) {
            if (err) throw err;

            res.json(results);
        });
    });

    app.put('/exercise', function (req, res) {
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

    app.delete('/exercise', function (req, res) {
        Exercise.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    });
}
