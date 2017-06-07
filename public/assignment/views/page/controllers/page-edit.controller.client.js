(function () {
    angular
        .module('WebAppMaker')
        .controller('editPageController', editPageController);


    function editPageController(pageService, websiteService, $routeParams) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];
            model.pageId = $routeParams['pageId'];

            pageService
                .findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                    model.name = model.page.name;
                    model.description = model.page.description;
                });

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