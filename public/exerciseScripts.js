const axios = require('axios');

$(document).ready(function () {

    //getting previous lifts

    axios.get('/lifts', function (err, results) {
        if(err) throw err;

        for (let i = 0; i < results.length; i++) {
            var liftRep = results.reps;
            var liftWeight = results.weight;
            var liftTime = results.time;
            var totalLift = $(`<h3>Weight: ${liftWeight}, Reps: ${liftRep}, Date: ${liftTime}</h3>`)

            $('#previousLifts').append(totalLift);
        };
    });
   
});