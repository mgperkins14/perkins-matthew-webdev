// https://developer.oxforddictionaries.com/documentation

var q = require('q');
const app = require('../../express');
const https = require('https');
// var btoa = require('btoa');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.0", true);
msf.authenticate(process.env.MSF_USERNAME, process.env.MSF_PASSWORD);
var srKey = process.env.SPORTRADAR_KEY;


app.get('/api/project/mysportsfeed', gameQuery);
app.get('/api/project/sr', srTest);
app.get('/api/project/day/:y/:m/:d', dateQuery);

function srTest(req, res) {

    srTestHelper()
        .then(function (response) {
            res.json(response)
        }, function (err) {
            res.send(err)
        });
}

function srTestHelper() {
    var deferred = q.defer();
    var path = '/na-t3/games/2015/10/29/schedule.json?api_key=b' + srKey;

    https.get({
        host: 'api.sportradar.us',
        pathname: path
    }, function (response) {
        console.log(response);
        var body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            try {
                var newBody = parse(body);
                console.dir(newBody);
                deferred.resolve(newBody)
            } catch (e) {
                deferred.reject({error: e})
            }
        })

    });

    return deferred.promise;
}

function test(req, res) {

    testHelper()
        .then(function (response) {
            res.json(response)
        }, function (err) {
            res.send(err)
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

function dateQuery(req, res, $http) {
    var year = req.params.y;
    var month = req.params.m;
    var day = req.params.d;
    var host = 'api.sportradar.us';
    var path = '/na-t3/games/' + year + '/' + month + '/' + day + '/schedule.json?api_key=b' + srKey;
    var url = host + path;

    $http
        .get(url)
        .then(function (response) {
            return response
        }
)
}