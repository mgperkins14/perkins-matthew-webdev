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
            widgetService
                .findWidgetById(widgetId)
                .then(function (widget) {
                    model.widget = widget;
                    model.widgetType = model.widget.widgetType;
                    model.name = model.widget.name;
                    model.description = model.widget.description;
                });
            model.userId = userId;
            model.websiteId = websiteId;
            model.pageId = pageId;
            model.widgetId = widgetId;

        }
        init();
    }
})();