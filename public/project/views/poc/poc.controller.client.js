(function () {
    angular
        .module('NBApp')
        .controller('pocController', pocController);


    function pocController($location, pocService, $http) {

        var model = this;
        model.search = search;

        function search() {
            $http.get('https://api.sportradar.us/nba-t3/games/2015/10/29/schedule.json?api_key=' + 'sv9avm6m738ve2rjmb68dmvj')
                .then(function (response) {
                    model.games = response;
                }, function (err) {
                    console.log(err)
                })

            // pocService
            //     .stephData()
            //     .then(function (players) {
            //         model.players = players;
            //     })
        }

    }
})();