var Workout = require('../models/workoutModel');
var Exercise = require('../models/exerciseModel');

let controller = {

    createOne: function (req, res) {

        var newWorkout = {
            name: req.body.name,
            exercise_id: req.body.exercise_id
        };

        Workout.create(newWorkout, function (err, result) {
            if (err) throw err;
            console.log('created', result);
            res.format({

                'text/html': function () {
                    res.redirect('/');
                },

                'application/json': function () {
                    res.send(result);
                }
            });
        });
    },

    readOne: function (req, res) {

        Workout
            .findOne({
                _id: req.params._id
            })
            .populate('exercise_id')
            .exec(function (err, result) {
                if (err) throw err;

                res.format({

                    'text/html': function () {
                        Exercise.find({}, function (err, results) {
                            if (err) throw err;
                            res.render('workout', {
                                workout: result,
                                exercises: results
                            });
                        });
                    },
                    'application/json': function () {
                        res.send(results);
                    }
                });
            });
    },

    readMany: function (req, res) {

        Workout.find({}, function (err, results) {
            if (err) throw err;

            res.format({

                'text/html': function () {
                    res.render('workouts', {
                        workouts: results
                    });
                },

                'application/json': function () {
                    res.send(results);
                }
            });
        });
    },

    updateOne: function (req, res) {

        Workout.findOne({
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
                        res.render('workout', {
                            workout: result
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

        Workout.deleteOne({
            _id: req.params._id
        }, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    },

    addExercise: function (req, res) {

        Workout.findOne({
            _id: req.body._id
        }, function (err, result) {
            if (err) throw err;

            if (req.body.exercise_id) {
                if (result.exercise_id.indexOf(req.body.exercise_id) === -1) {
                    result.exercise_id.push(req.body.exercise_id);
                }
            }
            result.save(function (err, result) {
                if (err) throw err;

                res.format({

                    'text/html': function () {
                        var path = '/workout/' + result._id;
                        res.redirect(path);
                    },

                    'application/json': function () {
                        res.send(result);
                    }

                });
            });
        });
    },

    removeExercise: function (req, res) {

        Workout.deleteOne({}, function (err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });
    }
};

module.exports = controller;