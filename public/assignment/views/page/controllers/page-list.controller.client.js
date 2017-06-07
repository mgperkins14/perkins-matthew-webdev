(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);

    function pageListController(pageService, websiteService, $routeParams) {
        var model = this;
        var websiteId = $routeParams["websiteId"];
        var userId = $routeParams["userId"];

        function init() {
            model.websiteId = websiteId;
            model.userId = userId;

            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });

            websiteService
                .findWebsiteById(model.websiteId)
                .then(function (website) {
                    model.website = website;
                });
        }
        init();

    }
})();