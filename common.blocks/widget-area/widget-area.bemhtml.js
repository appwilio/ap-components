//block('widget-area')
//    .match(function () {
//        var name = this.ctx.name,
//            allWidgets = this.ctx.widgets || this._widgets;
//        return allWidgets[name];})
//            .def()(function () {
//                var name = this.ctx.name,
//                    allWidgets = this.ctx.widgets || this._widgets,
//                    widgets = allWidgets[name];
//                    widgets.map(function (widget) {
//                    return this.extend({ 'block' : 'widget', 'mods' : {'type' : widget.type}}, widget);
//                },widgets);
//                return applyNext();
//            });

block('widget-area').match(function () {
    var name = this.ctx.name,
        allWidgets = this.ctx.widgets || this._widgets;
    return !allWidgets[name];
}).def()(function () {
    return ;
});

block('widget-area').match(function () {
    var name = this.ctx.name,
        allWidgets = this.ctx.widgets || this._widgets;
    return allWidgets[name];
}).def()(function () {
    var name = this.ctx.name,
        allWidgets = this.ctx.widgets || this._widgets,
        widgets = allWidgets[name];
        widgets.map(function (widget) {
        return this.extend({ 'block' : 'widget', 'mods' : { 'type' : widget.type } }, widget);
    }, widgets);
    return applyNext();
});
