(function () {
    angular
        .module('NBApp')
        .controller('profileController', profileController);


    function profileController(currentUser, $location, $routeParams, userService) {

        var model = this;
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.logout = logout;

        function init() {

        }
        init();

    }
})();