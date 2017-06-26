(function () {
    angular
        .module('NBApp')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
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
            .when('/user/:userId', {
                templateUrl: 'views/user/templates/profile.view.client.html',
                controller: 'profileController',
                controllerAs: 'model'
            })
            .when('/game/:gameId', {
                templateUrl: 'views/game/templates/game.view.client.html',
                controller: 'gameController',
                controllerAs: 'model'
            })
            .when('/player/:playerId', {
                templateUrl: 'views/player/templates/player.view.client.html',
                controller: 'playerController',
                controllerAs: 'model'
            })
            .when('/post/:postId', {
                templateUrl: 'views/post/templates/post.view.client.html',
                controller: 'postController',
                controllerAs: 'model'
            })
            .when('/search/players', {
                templateUrl: 'views/search/templates/search-player.view.client.html',
                controller: 'searchPlayerController',
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

})();
