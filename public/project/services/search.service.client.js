(function () {
    angular
        .module('NBApp')
        .factory('searchService', searchService);

    function searchService($http) {
        return {
            findGamesForDay: findGamesForDay
        };


    }
})();