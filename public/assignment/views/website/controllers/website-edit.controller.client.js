(function () {
    angular
        .module('WebAppMaker')
        .controller('editWebsiteController', editWebsiteController);



    function editWebsiteController(websiteService, $routeParams) {
        var model = this;
        var userId = $routeParams['userId'];
        var websiteId = $routeParams['websiteId'];

        function init() {
            model.websites = websiteService.findWebsitesByUser(userId);
            model.websiteId = websiteId;
            model.website = websiteService.findWebsiteById(websiteId);
            model.userId = userId;
            model.name = model.website.name;
            model.description = model.website.description;
        }
        init();
    }
})();