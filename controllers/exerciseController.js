var Exercise = require('../models/exerciseModel');

module.exports = function (app) {

    app.post('/api/exercise', function (req, res) {

        var newExercise = {
            name: req.body.name            
        }

        Exercise.create(newExercise, function (err, result) {
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

            if (req.body.name) {
                result.name = req.body.name;
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
