(function () {
    angular
        .module('WebAppMaker')
        .controller('newWebsiteController', newWebsiteController);

    function newWebsiteController(websiteService, $routeParams, $location) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
        }
        init();

        function newWebsite(name, description) {
            var website = {
                name: name,
                description: description
            };

            websiteService.createWebsite(model.userId, website);

            model.websiteId = website.websiteId;

            $location.url('#!/user/' + model.userId + '/website/' + model.websiteId)
        }
    }
})();