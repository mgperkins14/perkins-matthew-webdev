var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model('WidgetModel', widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;


module.exports = widgetModel;

function createWidget(widget) {
    return widgetModel.create(widget);
}

function findAllWidgetsForPage(pageId) {
    return widgetModel
        .find({_page: pageId})
        .sort( { order: 1 } )
        .populate('_page')
        .exec();
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id: widgetId}, {
        $set : {
            order: Number,
            name: widget.name,
            text: widget.text,
            placeholder: widget.placeholder,
            description: widget.description,
            url: widget.url,
            width: widget.width,
            height: widget.height,
            rows: widget.rows,
            size: widget.size,
            class: widget.class,
            icon: widget.icon,
            deletable: widget.deletable,
            formatted: widget.formatted
        }
    });
}

function deleteWidget(widgetId) {
    return widgetModel.remove({_id: widgetId});
}

function reorderWidget(pageId, start, end) {

    widgetModel.findAllWidgetsForPage(pageId)
        .then(function (widgets) {
            for (widget in widgets) {
                var index = widget.order;
                if (index == start) {
                    widget.order = end          // this is the element being moved, so set its order to `end`
                }
                else if (start > end && index < start && index >= end) {
                    widget.order = index + 1        // item was moved down, so move elements in between up
                }
                else if (end > start && index > start && index <= end) {
                    widget.order = index - 1    // item was moved up, so move elements in between down
                }
            }
            return widgetsList
        }, function (err) {
            console.log(err);
        });


}
