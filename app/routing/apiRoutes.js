var friendsData = require('../data/friends')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData)

    })

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        var quizResults = newFriend.scores.map(function (x) {
            return parseInt(x, 10)
        })

        var totalDifferences = [];


        for (x = 0; x < friendsData.length; x++) {

            var friendsDataScores = friendsData[x].scores;

            var difference = 0;

            for (i = 0; i < quizResults.length; i++) {
                // console.log(quizResults[i] - friendsDataScores[i]);

                difference += Math.abs(quizResults[i] - friendsDataScores[i]) // 3 5

            }

            totalDifferences.push(difference);
        }

        console.log(totalDifferences)

        var minVal = Math.min.apply(null, totalDifferences);


        totalDifferences[0];


        var indexTotDif = totalDifferences.indexOf(minVal)


        var newFriendObj = [
            {
                name: friendsData[indexTotDif].name
            },
            {
                photo: friendsData[indexTotDif].photo
            }
        ]


        friendsData.push(newFriend)
        res.json(newFriendObj)


    })

    app.post("/api/clear", function(req, res) {
        
        friendsData.length = [];
        res.json({ ok: true });
      });


}