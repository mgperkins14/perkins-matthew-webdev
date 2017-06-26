(function () {
    angular
        .module('NBApp')
        .controller('pocController', pocController);


    function pocController($location, pocService, $http) {

        var model = this;
        model.search = search;

        function init() {

        }
        init();

        function search() {
            pocService
                .findGamesForDay()
                .then(function (data) {
                    model.games = data.games
                }, function (err) {
                    console.log(err)
                });
            // $http.get('https://api.sportradar.us/nba-t3/games/2015/10/29/schedule.json?api_key=' + 'sv9avm6m738ve2rjmb68dmvj')
            //     .then(function (response) {
            //         var data = response.data;
            //         console.log(data);
            //         model.games = data.games;
            //     }, function (err) {
            //         console.log(err)
            //     });



            // pocService
            //     .stephData()
            //     .then(function (players) {
            //         model.players = players;
            //     })
        }

    }
})();