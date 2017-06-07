(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteListController', websiteListController);



    function websiteListController(websiteService, $routeParams) {
        var model = this;
        model.userId = $routeParams["userId"];

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }
        init();


    }
})();