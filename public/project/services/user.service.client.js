(function () {
    angular
        .module('NBApp')
        .factory('userService', userService);

    function userService($http) {
        return {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser,
            login: login,
            logout: logout,
            register: register,
            checkLoggedIn: checkLoggedIn,
            findPostsByUser: findPostsByUser
        };

        function createUser(user) {
            var url = "/api/project/user";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                })
        }

        function findUserByUsername(username) {
            var url = "/api/project/user?username=" + username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateUser(userId, user) {
            var url = "/api/project/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            var url = "/api/project/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/project/user?username=" + username + "&password=" + password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserById(userId) {
            var url = "/api/project/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function login(username, password) {
            var credentials = {
                username: username,
                password: password
            };
            return $http.post("/api/project/login", credentials)
                .then(
                    function (response) {
                        return response.data;
                    });
        }

        function logout(user) {
            return $http
                .post("/api/project/logout")
                .then(function (response) {
                    return response.data
                })
        }

        function register(user) {
            return $http.post("/api/project/register", user)
                .then(function (response) {
                        return response.data;
                    }
                )
        }

        function checkLoggedIn() {
            var url = "/api/project/checkLoggedIn";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findPostsByUser() {
            var url = '/api/project/' + userId
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

    }
})();