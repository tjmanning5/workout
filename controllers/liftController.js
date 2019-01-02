var Lift = require('liftModel.js');


module.exports = function (app) {

    app.post('/api/lift', function (req, res) {

        var NewLift = {
            set: {
                reps: req.body.reps,
                weight: req.body.weight,
                time: Date.now,
                set: req.body.set
            }
        };

        Lift.create(NewLift, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/lift/:id', function (req, res) {
        Lift.findOne({ _id: req.params.id }, function (err, result) {
            if (err) throw err;

            res.json(result);
        });
    });

    app.get('/api/lifts', function (req, res) {
        Lift.find({}, function (err, results) {
            if (err) throw err;

            res.json(results);
        });
    });

    app.put('/api/lift', function (req, res) {
        Lift.findOne({ _id: req.body.id }, function (err, result) {
            if (err) throw err;

            if (req.body.reps) {
                result.reps = req.body.reps;
            }
            if (req.body.weight) {
                result.weight = req.body.reps;
            }
            if (req.body.time) {
                result.time = req.body.time;
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.json(result);
            });
        });
    });

    app.delete('/api/lift', function (req, res) {
        Lift.deleteOne({}, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    });
}
