
// Import friends data
var friendsArray = require('../data/friends');

// Routing
module.exports = function(app) {
    
    // GET Route to /api/friends
    app.get('/api/friends', function(req, res) {
        res.json(friendsArray);
    });

    // POST Route to /api/friends
    app.post("/api/friends", function(req, res) {
        
        var submittedScores = req.body.scores;
        var totalDifference = 0;
        var matchArray = [];
        var bestMatchScore = 40; // ( 10 * (5-1) ) = 40; the worst possible Compatibility Match Value
        var bestMatchID = 0;

        // Extract Scores from "friendsArray" and add them to new array "scoresArray"
        var scoresArray = friendsArray.map(function(a) {
            return a.scores;
        });
        
        // Loop into each object of "scoresArray"
        for (var i=0; i < scoresArray.length; i++) {

            // Initialize totalDiffernece
            var totalDifference = 0;

            // Loop into each score for current object
            for (var k=0; k < scoresArray[i].length; k++) {

                // Calculate the diffrence for each element in the array and add it to the "totalDifference"
                totalDifference += Math.abs(submittedScores[k] - scoresArray[i][k]);
            }

            // Create new array with just the "totalDifference" values
            matchArray.push(totalDifference);
            
            // Get the ID for the most compatible match
            for (var l=0; l < matchArray.length; l++) {
                if (matchArray[l] <= bestMatchScore) {
                    bestMatchScore = matchArray[l];
                    bestMatchID = l;
                }
            }
        }
        // console.log("ID: " + bestMatchID + " Score: " + bestMatchScore);
        res.json(friendsArray[bestMatchID]);
    });
}