(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);



    function widgetListController(widgetService, $routeParams, $sce) {
        var model = this;
        var pageId = $routeParams["pageId"];
        var userId = $routeParams["userId"];
        var websiteId = $routeParams["websiteId"];


        function init() {
            model.widgets = widgetService.findWidgetsByPageId(pageId);
            model.userId = userId;
            model.websiteId = websiteId;
            model.pageId = pageId;
        }
        init();

        model.trustThisContent = trustThisContent;
        model.getYoutubeEmbedUrl = getYoutubeEmbedUrl;

        function trustThisContent(html) {
            // scrub unsafe content
            return $sce.trustAsHtml(html);
        }

        function getYoutubeEmbedUrl(youTubeLink) {
            var embedUrl = 'https://www.youtube.com/embed/';
            var youTubeLinkParts = youTubeLink.split('/');
            var id = youTubeLinkParts[youTubeLinkParts.length - 1];
            embedUrl += id;

            return $sce.trustAsResourceUrl(embedUrl);
        }
    }
})();