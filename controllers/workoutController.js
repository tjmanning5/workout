var Workout = require('../models/workoutModel');

let controller = {

    createOne: function(req, res) {

        var newWorkout = {
            name: req.body.name,
            exercise_id: req.body.exercise_id
        };

        Workout.create(newWorkout, function(err, result) {
            if (err) throw err;

            res.json(result);
        });

    },

    readOne: function(req, res) {

        Workout.findOne({
            _id: req.query.id
        }, function(err, result) {
            if (err) throw err;

            res.json(result);
        });

    },

    readMany: function(req, res) {

        Workout.find({}, function(err, results) {
            if (err) throw err;

            res.json(results);
        });

    },

    updateOne: function(req, res) {

        Workout.findOne({
            _id: req.body.id
        }, function(err, result) {
            if (err) throw err;

            if (req.body.name) {
                result.name = req.body.name;
            }

            result.save(function(err, result) {
                if (err) throw err;

                res.json(result);
            });
        });

    },

    addExercise: function(req, res) {

        Workout.findOne({
            _id: req.body.id
        }, function(err, result) {
            if (err) throw err;

            if (req.body.exercise_id) {
                if (result.exercise_id.indexOf(req.body.exercise_id) === -1) {
                    result.exercise_id.push(req.body.exercise_id);
                }
            }

            result.save(function(err, result) {
                if (err) throw err;

                res.json(result);
            });
        });

    },

    removeExercise: function(req, res) {

        Workout.findOne({
            _id: req.body.id
        }, function(err, result) {
            if (err) throw err;

            if (req.body.exercise_id) {
                var index = result.exercise_id.indexOf(req.body.exercise_id);

                if (index > -1) {
                    result.exercise_id.splice(index, 1);
                }
            }

            result.save(function(err, result) {
                if (err) throw err;

                res.json(result);
            });
        });

    },

    deleteOne: function(req, res) {

        Workout.findOne({
            _id: req.body.id
        }, function(err, result) {
            if (err) throw err;

            res.status(204);
            res.end();
        });

    }

};

module.exports = controller;