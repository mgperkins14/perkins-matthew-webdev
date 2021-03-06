(function () {
    angular
        .module('NBApp')
        .controller('registerController', registerController);


    function registerController(userService, $location) {
        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(username, password, password2) {

            if(password !== password2) {
                model.error = "Passwords must match";
                return;
            }

            var found = null;//userService.findUserByUsername(username);

            if(found !== null) {
                model.error = "Username is not available";
            } else {
                var user = {
                    username: username,
                    password: password
                };
                // model.message = user;
                userService
                    .register(user)
                    .then(function (user) {
                        $location.url('/login');
                    });
            }
        }
    }

})();