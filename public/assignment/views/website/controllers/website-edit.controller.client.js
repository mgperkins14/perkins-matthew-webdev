(function () {
    angular
        .module('WebAppMaker')
        .controller('editWebsiteController', editWebsiteController);

    function editWebsiteController(websiteService, $routeParams, $location) {
        var model = this;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];

            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });

            websiteService
                .findWebsiteById(model.websiteId)
                .then(function (website) {
                    model.website = website;
                    model.name = website.name;
                    model.description = website.description;
                });

        }
        init();

        function updateWebsite(name, description) {

            var website = {
                name: name,
                description: description
            };

            websiteService
                .updateWebsite(model.websiteId, website)
                .then(function (website) {
                    model.name = website.name;
                    model.description = website.description;
                    $location.url('#!/user/' +model.userId+ '/website')
                });
        }

        function deleteWebsite() {

            websiteService
                .deleteWebsite(model.websiteId)
                .then(function (status) {
                    console.log("made it");
                    $location.url('#!/user/' + model.userId + '/website')
                });
        }

    }

})();