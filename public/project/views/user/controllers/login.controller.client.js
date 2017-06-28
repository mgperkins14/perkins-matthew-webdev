(function () {
    angular
        .module('NBApp')
        .controller('loginController', loginController);


    function loginController($location, userService) {

        var model = this;

        model.login = function (username, password) {

            // var found = userService.findUserByCredentials(username, password);
            userService
                .login(username, password)
                .then(login, handleError);

            function handleError(error) {
                console.log(error);
                model.message = "Username " + username + " not found, please try again";
            }

            function login(found) {
                console.log(found);
                if(found !== null) {
                    $location.url('/profile');
                } else {
                    model.message = "Error: Please try again.";
                }
            }
        };
    }
})();