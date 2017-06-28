(function () {
    angular
        .module('NBApp')
        .controller('homeController', homeController);


    function homeController(currentUser, userService) {
        var model = this;

        model.user = currentUser;

        function init() {
            model.posts = [];

            for (f in model.user.following) {
                userService
                    .findPostsByUser(f._id)
                    .then(function (posts) {
                        model.posts.splice(0, 0)
                    })
            }
        }
        init();

    }

})();