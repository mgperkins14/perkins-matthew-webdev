(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetChooserController', widgetChooserController);



    function widgetChooserController(widgetService, $routeParams) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['websiteId'];
            model.pageId = $routeParams['pageId'];
        }
        init();

        function newHeader() {

            var widget = [
                widgetType = "HEADING"
            ];

            widgetService.createWidget(model.pageId, widget);

            model.widgetId = widget._id;
        }

        function newImage() {

            var widget = [
                widgetType = "IMAGE"
            ];

            widgetService.createWidget(model.pageId, widget);

            model.widgetId = widget._id;
        }

        function newYouTube() {

            var widget = [
                widgetType = "YOUTUBE"
            ];

            widgetService.createWidget(model.pageId, widget);

            model.widgetId = widget._id;
        }
    }
})();