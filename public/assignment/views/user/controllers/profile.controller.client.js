/**
 * Created by MattP on 5/26/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);



    function profileController($location, $routeParams, userService, $rootScope) {
        var model = this;
        var userId = $routeParams['uid'];
        model.user = $rootScope.currentUser;
        var userId = $rootScope.currentUser._id;

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.logout = logout;

        function init() {
            userService
                .findUserById(userId)
                .then(function (user) {
                    model.user = user;
                    model.userId = model.user._id;
                })
        }
        init();


        function deleteUser() {
            userService
                .deleteUser(model.userId)
                .then(function () {
                    $rootScope.currentUser = null;
                    $location.url('/login');
                });
        }

        function updateUser() {
            userService
                .updateUser(model.userId, model.user)
                .then(function () {
                    model.message = "User updated successfully";
                });
        }

        function logout() {
            userService
                .logout()
                .then(function () {
                    $rootScope.currentUser = null;
                    $location.url('/login');
                });
        }
    }
})();