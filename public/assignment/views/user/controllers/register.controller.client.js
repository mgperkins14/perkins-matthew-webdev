(function () {
    angular
        .module('WebAppMaker')
        .controller('registerController', registerController);



    function registerController(userService, $location) {
        var model = this;

        function register(username, password, password2) {

            if (password !== password2) {
                model.error = "Passwords do not match";
                return;
            }

            var found = userService.findUserByUsername(username);

            if (found !== null) {
                model.error = "Username is taken";
            } else {
                var user = {
                    username: username,
                    password: password
                };
                userService.createUser(user);
                $location.url('/user' + user._id)
            }
        }
    }
})();