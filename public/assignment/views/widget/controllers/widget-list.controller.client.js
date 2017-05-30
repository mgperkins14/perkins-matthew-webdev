(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);



    function widgetListController(widgetService, $routeParams) {
        var model = this;
        var pageId = $routeParams["pageId"];

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(pageId);
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