(function () {
    angular
        .module('NBApp')
        .controller('searchPlayerController', searchController);


    function searchController($location, playerService) {

        var model = this;
        model.search = search;

        function search(text) {
            playerService
                .findPlayer(text)
                .then(function (players) {
                    model.players = players;
                })
        }

    }
})();