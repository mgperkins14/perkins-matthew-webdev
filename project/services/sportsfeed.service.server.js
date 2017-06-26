// https://developer.oxforddictionaries.com/documentation

var q = require('q');
const app = require('../../express');
const https = require('https');
var btoa = require('btoa');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true);
msf.authenticate(process.env.MSF_USERNAME, process.env.MSF_PASSWORD);
var srKey = process.env.SPORTRADAR_KEY;


app.get('/api/project/mysportsfeed', gameQuery);
app.get('/api/project/msf', srTest);

//app.get('', playerQuery);
//app.get('', dateQuery);

function srTest() {

    srTestHelper()
        .then(function (response) {
            res.json(response)
        }, function (err) {
            res.sendStatus(404)
        });
}

function srTestHelper() {
    var url = 'api.sportradar.us/nba-t3/games/2015/10/29/schedule.json?api_key=' + srKey;

    https.get(url, function (response) {
        var body = '';

    })
}

function test(req, res) {

    testHelper()
        .then(function (response) {
            res.json(response)
        }, function (err) {
            res.sendStatus(404)
        });

}

function testHelper() {
    var deferred = q.defer();

    msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'isaiah-thomas'}, function (err, gamelog) {
        if (err) {
            deferred.reject(err)
        } else {
            console.log(gamelog);
            deferred.resolve(gamelog);
        }
    });
    return deferred.promise;
}


function gameQuery(req, res) {
    var seasonName = req.params.season;
    var gameId = req.params.gameId;
    gameQueryHelper(seasonName, gameId)
        .then(function (response) {
            res.json(response);
        }, function (err) {
            res.sendStatus(404).send(error)
        });
}

function gameQueryHelper(seasonName, gameId) {
    var deferred = q.defer();

    const httpOptions = {
        hostname: 'www.mysportsfeeds.com',
        port: '443',
        path: '/api/feed/pull/nba/2015-2016-regular/cumulative_player_stats.json',
        headers: {
            "Authorization":"Basic " + btoa(username + ":" + password)
        }
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;

    https.get(httpOptions, function(response) {
        var responseBufs = [];
        var responseStr = '';
        response.on('data', function(chunk) {
            if (Buffer.isBuffer(chunk)) {
                responseBufs.push(chunk);
                var temp = JSON.parse(responseBufs.toString());
            }
            else {
                responseStr += chunk;
            }
        });
        response.on('end', function() {
            try {
                console.log(responseStr);
            } catch(e) {
                deferred.reject({error: e})
            }
        });
    });
    return deferred.promise;
}