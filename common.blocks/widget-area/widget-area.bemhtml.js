block('widget-area').replace()(
    function(){
        this.ctx.widgetList = this.ctx.widgets[this.ctx.name];
        var _this = this;
        return this.ctx.widgetList.map(function(widget){
            return _this.extend(
                { block : 'widget', mods : { type : widget.type } },
                widget
            );
        });
    }
);
