var Lift = require('../models/liftModel');

let controller = {

    createOne: function (req, res) {

        var newLift = {

            reps: req.body.reps,
            weight: req.body.weight,
            exercise_id: req.body.exercise_id
        };

        Lift.create(newLift, function(err, result) {
            if(err) throw err;

            res.json(result);
        });
    },

    readOne: function(req, res) {
        Lift.findOne({
            _id: req.params._id
        }, function(err, result) {
            if(err) throw err;

            res.json(result);
        });
    },

    readMany: function(req, res) {

        Lift.find({}, function(err, results) {
            if(err) throw err;

            res.json(results);
        });
    },

    updateOne: function(req, res) {

        Lift.findOne({
            _id: req.body._id
        }, function (err, result) {
            if(err) throw err;

            if(req.body.reps) {
                result.reps = req.body.reps
            }
            if(req.body.weight) {
                result.weight = req.body.weight;
            }
            
            result.save(function(err, result) {
                if(err) throw err;

                res.json(result);
            });
        });
    },

    deleteOne: function(req, res) {

        Lift.deleteOne({
            _id: req.params._id
        }, function(err, result) {
            if(err) throw err;

            res.status(204);
            res.end();
        });
    }
};

module.exports = controller;