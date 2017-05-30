/**
 * Created by MattP on 5/26/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);



    function profileController($location, $routeParams, userService) {

        var model = this;
        model.userId = $routeParams['userId'];

        function init() {
            model.user = userService.findUserById(model.userId);
        }
        init();

    }
})();