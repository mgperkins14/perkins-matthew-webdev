(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);



    function pageListController(pageService, websiteService, $routeParams) {
        var model = this;
        var websiteId = $routeParams["websiteId"];

        function init() {
            model.pages = pageService.findPageByWebsiteId(websiteId);
            model.website = websiteService.findWebsiteById(websiteId);
            model.userId = model.website.userId;
            model.user = websiteService.findUserById(model.userId);
        }
        init();

        function pageEditUrl(pageId) {
            var url = '#!/user/' + model.userId + '/website/' + websiteId + '/page/' + pageId;
            return url;
        }
    }
})();