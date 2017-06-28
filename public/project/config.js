(function () {
    angular
        .module('NBApp')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'homeController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkCurrentUser
                }
            })
            .when('/poc', {
                templateUrl: 'views/poc/poc.view.client.html',
                controller: 'pocController',
                controllerAs: 'model'
            })
            .when('/about', {
                templateUrl: 'view/information/templates/about.view.client.html',
                controller: 'aboutController',
                controllerAs: 'model'
            })
            .when('/login', {
                templateUrl: 'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: 'views/user/templates/register.view.client.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when('/profile/view', {
                templateUrl: 'views/user/templates/profile.view.client.html',
                controller: 'profileViewController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkCurrentUser
                }
            })
            .when('/profile', {
                templateUrl: 'views/user/templates/profile-edit.view.client.html',
                controller: 'profileEditController',
                controllerAs: 'model',
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when('/game/:gameId', {
                templateUrl: 'views/game/templates/game.view.client.html',
                controller: 'gameController',
                controllerAs: 'model'
            })
            .when('/post/:postId', {
                templateUrl: 'views/post/templates/post.view.client.html',
                controller: 'postController',
                controllerAs: 'model'
            })
            .when('/post/:postId/edit', {
                templateUrl: 'views/post/templates/post-edit.view.client.html',
                controller: 'postEditController',
                controllerAs: 'model'
            })
            .when('/search/games', {
                templateUrl: 'views/search/templates/search-game.view.client.html',
                controller: 'searchGameController',
                controllerAs: 'model'
            })
            .when('/search/users', {
                templateUrl: 'views/search/templates/search-user.view.client.html',
                controller: 'searchUserController',
                controllerAs: 'model'
            })
    }

    function checkCurrentUser($q, $location, userService) {
        var deferred = $q.defer();
        userService
            .checkLoggedIn()
            .then(function (currentUser) {
                if(currentUser === '0') {
                    deferred.resolve({});
                    $location.url('/post/view')
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }

    function checkAdmin($q, $location, userService) {
        var deferred = $q.defer();
        userService
            .checkAdmin()
            .then(function (currentUser) {
                if(currentUser === '0') {
                    deferred.resolve({});
                    $location.url('/');
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }

    function checkLoggedIn($q, $location, userService) {
        var deferred = $q.defer();
        userService
            .checkLoggedIn()
            .then(function (currentUser) {
                if(currentUser === '0') {
                    deferred.reject();
                    $location.url('/login');
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }

})();
