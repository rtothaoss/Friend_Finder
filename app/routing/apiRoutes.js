var friendsData = require('../data/friends')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData)

    })

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;


        newScores()

        function newScores() {
            var newScores = newFriend.scores;
            var result = newScores.map(function (x) {
                return parseInt(x, 10)
            })

            var differences = 0;
            var userResult = result

            var totalDifference = [];


            if (friendsData.length > 1) {

                for (x = 0; x < friendsData.length; x++) {

                    var comparedResult = friendsData[x].scores


                    if (totalDifference.length > 0) {
                        differences = 0;
                    }

                    for (i = 0; i < result.length; i++) {

                        var difference = userResult[i] - comparedResult[i]
                        differences += Math.abs(difference)
                        // console.log(differences)

                    }

                    totalDifference.push(differences);
                }

                // console.log(totalDifference)

                var minVal = Math.min.apply(null, totalDifference) 
                // console.log(minVal)
                var indexTotDif = totalDifference.indexOf(minVal)

                console.log(indexTotDif)
                console.log(friendsData[indexTotDif].name)
                console.log(friendsData[indexTotDif].photo)

                var newFriendObj = [
                    {
                     name:  friendsData[indexTotDif].name
                    },
                    {
                    photo: friendsData[indexTotDif].photo
                    }
                ]

            }
            friendsData.push(newFriend)
            res.json(newFriendObj)
        
        }

        // friendsData.push(newFriend)
        // res.json(friendsData[indexTotDif].name)

    })


}