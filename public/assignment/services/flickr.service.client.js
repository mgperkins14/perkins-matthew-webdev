(function () {
    angular
        .module('WebAppMaker')
        .service('flickrService', flickrService);

    function flickrService($http) {

        this.searchPhotos = searchPhotos;

        var key = '64f00efacaaab2fcdd15839cd41b12a1';
        var secret = 'da6343ce656156db';
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


        function searchPhotos(searchTerm) {
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchTerm);
            return $http.get(url);
        }

    }
})();