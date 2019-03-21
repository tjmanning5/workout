var exerciseController = require('../controllers/exerciseController');
var liftController = require('../controllers/liftController');
var workoutController = require('../controllers/workoutController');
var homeController = require('../controllers/homeController');

module.exports = function (app) {

    //exercise
    app.post('/exercise', exerciseController.createOne);
    app.get('/exercise/:_id', exerciseController.readOne);
    app.get('/exercises', exerciseController.readMany);
    app.put('/exercise', exerciseController.updateOne);
    app.delete('/exercise/:_id', exerciseController.deleteOne);

    //lift
    app.post('/lift', liftController.createOne);
    app.get('/lift/:_id', liftController.readOne);
    app.get('/lifts', liftController.readMany);
    app.put('/lift', liftController.updateOne);
    app.delete('/lift/:_id', liftController.deleteOne);

    //workout
    app.post('/workout', workoutController.createOne);
    app.get('/workout/:_id', workoutController.readOne);
    app.get('/workouts', workoutController.readMany);
    app.put('/workout', workoutController.updateOne);
    app.put('/workout/add_exercise', workoutController.addExercise);
    app.put('/workout/remove_exercise', workoutController.removeExercise);
    app.delete('/workout/:_id', workoutController.deleteOne);

    //frontend

    app.get('/', homeController.index);
};