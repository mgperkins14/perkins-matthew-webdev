(function () {
    angular
        .module('NBApp')
        .controller('searchUserController', searchController);


    function searchController($location, userService) {

        var model = this;
        model.search = search;

        function search(text) {
            userService
                .findUser(text)
                .then(function (user) {
                    model.user = user;
                })
        }

    }
})();