(function () {
    angular
        .module('WebAppMaker')
        .controller('newPageController', newPageController);


    function newPageController(pageService, $routeParams) {
        var model = this;
    }

    function init() {
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
    }
})();