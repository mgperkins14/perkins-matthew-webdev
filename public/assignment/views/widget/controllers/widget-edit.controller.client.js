(function () {
    angular
        .module('WebAppMaker')
        .controller('editWidgetController', editWidgetController);



    function editWidgetController(widgetService, $routeParams) {
        var model = this;
        var widgetId = $routeParams['widgetId'];

        function init() {
            model.widget = widgetService.findWidgetById(widgetId);
        }
        init();
    }
})();