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
            nerdData: nerdData,
            findGamesForDay: findGamesForDay
        };

        function findGamesForDay(date) {
            var mdy = date.split('/');
            var month = mdy[0];
            var day = mdy[1];
            var year = mdy[2];
            var url = '/api/project/day/' + year + '/' + month + '/' + day;
            $http.get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function getGameData(season, gameId) {
            var seasonName = '2015-2016-regular';
            var gameId = '20151029-ATL-NYK';

            $http.get('/api/project/game')
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


    }

})();