(function () {
    angular
        .module('WebAppMaker')
        .controller('editWidgetController', editWidgetController);



    function editWidgetController(widgetService, $routeParams) {
        var model = this;
        var userId = $routeParams['userId'];
        var websiteId = $routeParams['websiteId'];
        var pageId = $routeParams['pageId'];
        var widgetId = $routeParams['widgetId'];

        function init() {
            model.widget = widgetService.findWidgetById(widgetId);
            model.userId = userId;
            model.websiteId = websiteId;
            model.pageId = pageId;
            model.widgetId = widgetId;
            model.widgetType = model.widget.widgetType;

        }
        init();
    }
})();