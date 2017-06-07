/**
 * Created by MattP on 5/27/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .factory('userService', userService);

    function userService() {

        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
        }

        function findUserById(userId) {
            return users.find(function (user) {
                return user._id === userId;
            });
        }

        function findUserByUsername(username) {
            var user = users.find(function (user) {
                return user.username === username;
            });
            if(typeof user === 'undefined')
                return null;
            return user;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                var user = users[u];
                if(user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            var replaceUser = findUserById(userId);
            for (var k in user) {
                if (user.hasOwnProperty(k)) {
                    replaceUser[k] = user[k];
                }
            }
        }

        function deleteUser(userId) {
            var u = users.find(function (user) {
                return user._id === userId;
            });
            var index = users.indexOf(u);
            users.splice(index, 1);
        }

    }
})();