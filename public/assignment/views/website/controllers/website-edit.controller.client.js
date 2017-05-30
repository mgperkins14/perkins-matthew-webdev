(function () {
    angular
        .module('WebAppMaker')
        .controller('editWebsiteController', editWebsiteController);



    function editWebsiteController(websiteService, $routeParams) {
        var model = this;
        var websiteId = $routeParams['websiteId'];

        function init() {
            model.website = websiteService.findWebsiteById(model.websiteId);
        }
        init();
    }
})();