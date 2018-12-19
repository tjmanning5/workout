//option tag is gonna need to have a get many method for each exercise and then list each one as a drop down select
//need to set up an input field for new exercises
//need to display sets once exercise is chosen from drop down
//once exercise is selected, input fields for reps/weight, with ability to multi add for multiple sets
//maybe, just maybe, try and display data on graph of weight over time

const axios = require('axios');

$(document).ready(function () {

    //new workouts
    var newWorkoutName = $('#newWorkoutName').val();

    var workoutPost = axios.post('/workout', { workoutName: newWorkoutName });

    workoutPost();


    //getting workouts

    var workoutList = function () {
        axios.get('/workouts', function (err, results) {
            if (err) throw err;

            for (let i = 0; i < results.length; i++) {
                var workout = results.workoutName;
                var workoutLink = $(`<a href="">${workout}</a>`);

                $('#workoutList').append(workoutLink);
            }
        });
    };

    workoutList();

    
    //adding new exercise
    var newExerciseName = $('#newExerciseName').val();

    var exercisePost = axios.post('/exercise', { exerciseName: newExerciseName });

    exercisePost();



    //getting individual exercises


    var dropdownMenu = function () {
        axios.get('/exercises', function (err, results) {
            if (err) throw err;

            for (let i = 0; i < results.length; i++) {
                var name = results.exerciseName;
                var dropdownItem = $(`<option value="${name}>${name}</option>`);

                $('#dropdownList').append(dropdownItem);
            }
        });
    };

    dropdownMenu();
});