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
            model.pages = pageService.findPageByWebsiteId(websiteId);
            model.website = websiteService.findWebsiteById(websiteId);
            model.user = websiteService.findWebsiteById(model.userId);
        }
        init();

    }
})();