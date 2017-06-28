(function () {
    angular
        .module('NBApp')
        .controller('profileController', profileController);


    function profileController(currentUser, $location, $routeParams, postService, userService) {

        var model = this;
        model.follow = follow;
        model.userId = $routeParams['userId'];

        function init() {
            userService
                .findUserById(model.userId)
                .then(function (user) {
                    if (currentUser === user) {
                        $location.url('/profile')
                    }
                });
            postService
                .findPostsByUser(model.userId)
                .then(function (posts) {
                    model.posts = posts;
                })
        }
        init();

    }
})();