(function () {
    angular
        .module('WebAppMaker')
        .controller('editPageController', editPageController);


    function editPageController(pageService, websiteService, $routeParams) {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pageId = $routeParams['pageId'];

        function init() {
            model.page = pageService.findPageById(model.pageId);
            model.name = model.page.name;
            model.description = model.page.description;
            model.website = websiteService.findWebsiteById(model.websiteId);
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }
        init();

    }
})();