(function () {
    angular
        .module('WebAppMaker')
        .controller('newPageController', newPageController);


    function newPageController(pageService, $routeParams, $location) {
        var model = this;


        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];
            model.newPage = newPage;
        }

        init();

        function newPage(name, description) {
            var page = {
                name: name,
                description: description
            };

            pageService
                .createPage(model.websiteId, page)
                .then(function (page) {
                    model.pageId = page._id;
                    $location.url('#!/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId)
                });
        }
    }

})();