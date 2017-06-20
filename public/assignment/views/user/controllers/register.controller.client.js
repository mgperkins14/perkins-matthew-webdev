(function () {
    angular
        .module('WebAppMaker')
        .controller('registerController', registerController);


    function registerController(userService, $location, $rootScope) {
        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(username, password, password2) {

            if (username === undefined || password === null || password2 === undefined) {
                model.error = "Please fill out all required fields.";
                return;
            }

            if (password !== password2) {
                model.error = "Passwords must match";
                return;
            }

            userService
                .findUserByUsername(username)
                .then(function (response) {
                    var found = response;
                    if (found !== null) {
                        model.error = "Username is not available";
                    } else {
                        var user = {
                            username: username,
                            password: password
                        };
                        userService
                            .register(user)
                            .then(function (response) {
                                $rootScope.currentUser = user;
                                $location.url('/profile');
                            });
                    }
                });
        }

    }
})();