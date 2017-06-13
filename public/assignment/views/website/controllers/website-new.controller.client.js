(function () {
    angular
        .module('WebAppMaker')
        .controller('newWebsiteController', newWebsiteController);

    function newWebsiteController(websiteService, $routeParams, $location) {
        var model = this;


        function init() {
            model.userId = $routeParams['userId'];
            model.newWebsite = newWebsite;
        }
        init();

        function newWebsite(name, description) {
            var website = {
                name: name,
                description: description
            };

            websiteService
                .createWebsite(model.userId, website)
                .then(function (website) {
                    model.websiteId = website._id;
                    $location.url('#!/user/' + model.userId + '/website/' + model.websiteId)
                });
        }
    }
})();