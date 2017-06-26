(function () {
    angular
        .module('NBApp')
        .factory('gameService', gameService);

    function gameService($http) {
        //
        // var username = env.MSF_USERNAME;
        // var password = env.MSF_PASSWORD;

        return {
            getGameData: getGameData,
            nerdData: nerdData
        };

        function getSeason(gameId) {

        }

        function getGameData(season, gameId) {
            var seasonName = '2015-2016-regular';
            var gameId = '20151029-ATL-NYK';

            // var url = 'https://mg.perkins14:kibbles@www.mysportsfeeds.com/api/feed/pull/nba/' + seasonName + '/game_boxscore.json?gameid=' +gameId;

            $http.get('/api/project/mysportsfeed')
                .then(function (res) {
                    return res.data
                }, function (err) {
                    console.log(err)
                });
        }
            // $http.get('/api/mysportsfeed/season/' + '123' + '/game/' + '123')
            //     .then(function (res) {
            //         return res.data
            //     }, function (err) {
            //         console.log('err')
            //     })
        //}

        function nerdData() {
            var url = 'https://www.fantasybasketballnerd.com/service/draft-rankings';
            $http.get(url)
                .then(function (res) {
                    return res.data
                })
        }

    }

})();