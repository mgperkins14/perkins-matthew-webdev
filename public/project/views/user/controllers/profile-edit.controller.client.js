(function () {
    angular
        .module('NBApp')
        .controller('profileController', profileController);


    function profileController(currentUser, $location, $routeParams, userService) {

        var model = this;
        var userId = $routeParams['userId'];
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.logout = logout;

        function init() {
            model.userId = userId;
        }
        init();

        userService
            .findUserById(userId)
            .then(renderUser);

        function renderUser (user) {
            model.user = user;
        }

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                });
        }

        function updateUser(user) {
            userService
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User updated successfully";
                });
        }

        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/login')
                })
        }
    }
})();