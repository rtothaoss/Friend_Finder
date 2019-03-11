var friendsData = require('../data/friends')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData)

    })

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        friendsData.push(newFriend)
        res.json(newFriend)

        newScores()

        function newScores() {
            var newScores = newFriend.scores;
            var result = newScores.map(function (x) {
                return parseInt(x, 10)
            })

            var differences = 0;
            var differenceArray = []
            var userResult = result
            // var comparedResult = friendsData[0].scores
            // console.log(comparedResult)
            var totalDifference = [];

            const add = (a, b) => a + b

            if (friendsData.length > 1) {

                for (x = 0; x < friendsData.length; x++) {

                    var comparedResult = friendsData[x].scores
                    // var totalDifference = 0;
                    // console.log(comparedResult)

                     if(totalDifference.length > 0) {
                            differences = 0;
                        }
                        
                
                    for (i = 0; i < result.length; i++) {
                        
                        var difference = userResult[i] - comparedResult[i]
                        differences += Math.abs(difference)
                        console.log(differences)
                    
                       


                    } 

                    totalDifference.push(differences); 
                }

                console.log(totalDifference)
            }

        }

    })



}