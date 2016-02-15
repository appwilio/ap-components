module.exports = function (bh) {
    bh.match('widget-area', function (ctx, json){
        var name = ctx.param('name'),
            allWidgets = json.widgets || ctx.tParam('widgets');
        if(!allWidgets[name]) {
            return;
        }

        var widgets = allWidgets[name];
        return widgets.map(function(widget) {
            return ctx.extend({ 'block' : 'widget', 'mods' : { 'type' : widget.type } }, widget);
        }, widgets);
    });
};
