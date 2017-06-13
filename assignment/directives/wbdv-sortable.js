var app = require('../../express');
var widgetModel = require('../model/widget/widget.model.server');

(function () {
    angular
        .module('wbdvDirectives', ['WidgetModel'])
        .directive('wbdvSortable', wbdvSortable);


    // $(function() {
    //     $('#sortable').sortable({
    //         start: function(event, ui) {
    //             var start_pos = ui.item.index();
    //             ui.item.data('start_pos', start_pos);
    //         },
    //         change: function(event, ui) {
    //             var start_pos = ui.item.data('start_pos');
    //             var index = ui.placeholder.index();
    //             if (start_pos < index) {
    //                 $('#sortable li:nth-child(' + index + ')').addClass('highlights');
    //             } else {
    //                 $('#sortable li:eq(' + (index + 1) + ')').addClass('highlights');
    //             }
    //         },
    //         update: function(event, ui) {
    //             $('#sortable li').removeClass('highlights');
    //         }
    //     });
    // });

    function wbdvSortable() {

        function linkFunction(scope, element) {
            $(element).sortable();
            $(element).draggable();
        }

        return {
            link: linkFunction
        }
    }

})();