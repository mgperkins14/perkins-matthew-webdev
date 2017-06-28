(function () {
    angular
        .module('NBApp')
        .factory('postService', postService);

    function postService($http) {
        return {
            createPost: createPost,
            editPost: editPost,
            deletePost: deletePost
        };

        function createPost(post) {

        }

        function editPost(postId, post) {

        }

        function deletePost(postId) {

        }
    }
})();