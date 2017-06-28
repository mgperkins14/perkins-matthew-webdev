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
            $http.post('/api/project/post')
                .then(function (response) {
                    return response.data
                })
        }

        function editPost(postId, post) {
            $http.put('/api/project/post/' + postId)
                .then(function (response) {
                    return response.data
                })
        }

        function deletePost(postId) {
            $http.delete('/api/project/post/' + postId)
                .then(function (response) {
                    return response.data
                })
        }
    }
})();