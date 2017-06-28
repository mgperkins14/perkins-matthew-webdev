(function () {
    angular
        .module('NBApp')
        .controller('searchGameController', searchController);

    function searchController($location, gameService) {

        var model = this;
        model.search = function search(date) {
            gameService
                .findGamesForDay(date)
                .then(function (games) {
                    model.games = games;
                })
        }

    }
})();