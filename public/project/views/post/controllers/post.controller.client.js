(function () {
    angular
        .module('NBApp')
        .controller('postController', postController);


    function postController(currentUser, $location, postService) {

        var model = this;
        model.postId = $routeParams['postId'];
        model.user = currentUser;
        model.userId = model.user.userId;

        function init() {
            postService
                .findPostById(model.postId)
                .then(function (post) {
                    model.post = post;
                    model.title = post.title;
                    model.text = post.text;
                    model.likedBy = post.likedBy
                })
        }
        init();
    }
})();