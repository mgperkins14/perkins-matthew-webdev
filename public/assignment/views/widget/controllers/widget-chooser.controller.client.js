(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetChooserController', widgetChooserController);



    function widgetChooserController(widgetService, $routeParams, $location) {
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

            widgetService
                .createWidget(model.pageId, widget)
                .then(function (widget) {
                   model.widgetId = widget._id;
                   $location.url("#!/user/"+model.userI+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+model.widgetId);
                });
        }

        function newImage() {

            var widget = [
                widgetType = "IMAGE"
            ];

            widgetService
                .createWidget(model.pageId, widget)
                .then(function (widget) {
                    model.widgetId = widget._id;
                    $location.url("#!/user/"+model.userI+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+model.widgetId);
                });
        }

        function newYouTube() {

            var widget = [
                widgetType = "YOUTUBE"
            ];

            widgetService
                .createWidget(model.pageId, widget)
                .then(function (widget) {
                    model.widgetId = widget._id;
                    $location.url("#!/user/"+model.userI+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+model.widgetId);
                });
        }
    }
})();