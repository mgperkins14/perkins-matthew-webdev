(function () {
    angular
        .module('NBApp')
        .factory('pocService', pocService);

    function pocService($http) {
        return {
            getPlayers: getPlayers,
            stephData: stephData
        };

        function getPlayers() {
            var baseUrl = 'https://probasketballapi.com/teams';
            var query = '&api_key=' + 'd50OtibAG1Mmyr9YCHsfh87vleNpVKQu' + '&team_abbrv=BOS';

            $http.post(baseUrl + query)
                .then(function (res) {
                    return res.data
                }, function (err) {
                    console.log(err)
                })

        }

        function stephData() {
            $http.get('/api/project/msf')
                .then(function (res) {
                    return res.data
                }, function (err) {
                    console.log(err)
                })

        }

    }
})();