(function () {
    angular
        .module('WebAppMaker')
        .factory('websiteService', websiteService);

    function websiteService() {

        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];

        return {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        function createWebsite(userId, website) {
            website.developerId = userId;
            website._id = (new Date()).getTime() + "";
            website.created = new Date();
            website.updated = new Date();
            websites.push(website);
        }

        function findWebsitesByUser(userId) {
            var resultSet = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    resultSet.push(websites[w]);
                }
            }
            return resultSet;
        }

        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            });
        }

        function updateWebsite(websiteId, website) {
            var replaceSite = findWebsiteById(websiteId);
            for (var k in website) {
                if (website.hasOwnProperty(k)) {
                    replaceSite[k] = website[k];
                }
            }
        }

        function deleteWebsite(websiteId) {
            var w = websites.find(function (website) {
                return website._id === websiteId;
            });
            var index = websites.indexOf(w);
            websites.splice(index, 1);
        }

    }
})();