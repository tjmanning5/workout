var Exercise = require('../models/exerciseModel');

var controller = {

    createOne: function (req, res) {

        var newExercise = {
            name: req.body.name
        };

        Exercise.create(newExercise, function (err, result) {
            if (err) throw err;

            res.format({

                'text/html': function () {
                    res.render('exercise', {
                        exercise: result
                    });
                },

                'application/json': function () {
                    res.send(result);
                }
            });
        });
    },

    readOne: function (req, res) {

        Exercise.findOne({
            _id: req.query._id
        }, function (err, result) {
            if (err) throw err;

            res.format({

                html: function () {
                    res.send(result);
                }
            });
        });
    },

    readMany: function (req, res) {

        Exercise.find({}, function (err, results) {
            if (err) throw err;

            res.format({

                'text/html': function () {
                    res.render('exercises', {
                        exercises: results
                    });
                },
                'application/json': function () {
                    res.send(results);
                }
            });
        });
    },

    updateOne: function (req, res) {

        Exercise.findOne({
            _id: req.body._id
        }, function (err, result) {

            if (err) throw err;

            if (req.body.name) {
                result.name = req.body.name;
            }

            result.save(function (err, result) {
                if (err) throw err;

                res.format({

                    'text/html': function () {
                        res.render('exercise', {
                            exercise: result
                        });
                    },

                    'application/json': function () {
                        res.send(result);
                    }
                });
            });

        });
    },

    deleteOne: function (req, res) {

        Exercise.deleteOne({}, function(err, result) {
            if(err) throw err;

            res.status(204);
            res.end();
        }); 
    }
};

module.exports = controller;