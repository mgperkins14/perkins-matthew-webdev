(function () {
    angular
        .module('WebAppMaker')
        .controller('editPageController', editPageController);


    function editPageController(pageService, $routeParams) {
        var model = this;
        model.pagedId = $routeParams['pageId'];

        function init() {
            model.page = pageService.findPageById(model.pageId);
            model.name = model.page.name;
            model.description = model.page.description;
            model.websiteId = model.page.websiteId;
            model.website = websiteService.findWebsiteById(websiteId);
            model.userId = model.website.userId;
            model.user = websiteService.findUserById(model.userId);
        }
        init();

        function pageCompleteUrl() {
            var url = '#!/user/' + model.userId + '/website/' + model.websiteId + '/page'
        }

        function selectNewEdit(page) {
            model.pageId = page.pageId;
            init();
        }
    }
})();