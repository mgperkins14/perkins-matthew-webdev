(function () {
    angular
        .module('WebAppMaker')
        .controller('loginController', loginController);


    function loginController($location, userService) {

        var model = this;

        model.login = function (username, password) {

            var found = userService.findUserByCredentials(username, password);

            if (found !== null) {
                $location.url('/user/' + found._id)
                model.userId = found._id;
            }
            else {
                model.message = "Invalid login information."
            }
        };

    }
})();