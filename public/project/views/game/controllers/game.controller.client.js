(function () {
    angular
        .module('NBApp')
        .controller('gameController', gameController);


    function gameController($location, gameService, playerService, $routeParams) {

        var model = this;
        model.season = $routeParams['season'];
        model.gameId = $routeParams['gameId'];

        function init() {

            gameService
                .getGameData(model.season, model.gameId)
                .then(function (game) {
                    model.game = game;
                }, function (err) {
                    console.log(err)
                });

        }
        init();

        function switchView() {

        }

        function viewPlayer() {

        }

        function viewTeam() {

        }

        function getAbbrevs() {
            gameService
                .getAbbrevs(model.gameId)
                .then(function (abbrevs) {
                    model.abbrevs = abbrevs;
                }, function (err) {
                    console.log(err)
                })
        }

        function getPlayers() {
            gameService
                .getPlayers(model.gameId)
                .then(function (players) {
                    model.players = players
                }, function (err) {
                    console.log(err)
                })
        }


    }
})();