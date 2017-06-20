(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);


    function loginController($location, userService, $rootScope) {

        var model = this;

        model.login = function (username, password) {

            // var found = userService.findUserByCredentials(username, password);
            userService
                .findUserByCredentials(username, password)
                .then(login, handleError);

            function handleError(error) {
                model.message = "Username " + username + " not found, please try again";
            }

            function login(found) {
                if(found !== null) {
                    $location.url('/profile');
                    $rootScope.currentUser = found;
                    // $scope.message = "Welcome " + username;
                } else {
                    model.message = "Username " + username + " not found, please try again";
                }
            }
        };

    }
})();