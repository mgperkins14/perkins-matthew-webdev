(function () {
    angular
        .module('WebAppMaker')
        .factory('pageService', pageService);

    function pageService() {

        var pages = [
            {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
            {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
            {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
        ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            page._id = (new Date()).getTime() + "";
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var resultSet = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    resultSet.push(pages[p]);
                }
            }
            return resultSet;
        }

        function findPageById(pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            });
        }

        function updatePage(pageId, page) {
            var replacePage = findPageById(pageId);
            for (var k in pages) {
                if (page.hasOwnProperty(k)) {
                    replacePage[k] = page[k];
                }
            }
        }

        function deletePage(pageId) {
            var p = pages.find(function (page) {
                return page._id === pageId;
            });
            var index = pages.indexOf(p);
            pages.splice(index, 1);
        }

    }
})();