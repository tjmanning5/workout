var Exercise = require('../models/exerciseModel');

var controller = {

    createOne: function(req, res) {

        var newExercise = {
            name: req.body.name
        };

        Exercise.create(newExercise, function(err, result) {
            if (err) throw err;

            // res.json(result);

            res.format({

                'text/html': function() {
                    res.render('exercise', {
                        exercise: result
                    });
                },

                'application/json': function() {
                    res.send(result);
                }

            });

        });

    },

    readOne: function(req, res) {

        Exercise.findOne({
            _id: req.query._id
        }, function(err, result) {
            if (err) throw err;

            // res.json(result);

            res.format({

                html: function() {
                    res.render('exercise', {
                        exercise: result
                    });
                },

                json: function() {
                    res.send(result);
                }
            });

        });

    },

    readMany: function(req, res) {

        Exercise.find({}, function(err, results) {
            if (err) throw err;

            // res.json(results);

            res.format({

                html: function() {
                    res.render('exercises', {
                        exercises: results
                    });
                },

                json: function() {
                    res.send(results);
                }
            });
        });

    },

    updateOne: function(req, res) {

        Exercise.findOne({
            _id: req.body.id
        }, function(err, result) {

            if (err) throw err;

            if (req.body.name) {
                result.name = req.body.name;
            }

            result.save(function(err, result) {
                if (err) throw err;

                // res.json(result);

                res.format({

                    html: function() {
                        res.render('exercise', {
                            exercise: result
                        });
                    },
    
                    json: function() {
                        res.send(result);
                    }
                });
            });

        });

    },

    deleteOne: function(req, res) {

        Exercise.findOne({
            _id: req.body.id
        }, function(err, result) {
            if (err) throw err;

            res.format({

                html: function() {
                    res.redirect(204, '/exercises');
                },

                json: function() {
                    res.status(204);
                    res.end();
                }

            });

        });

    }

};

module.exports = controller;