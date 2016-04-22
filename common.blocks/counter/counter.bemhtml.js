block('counter')(

    js()(function(){
        return {
            val : this.ctx.count || 0,
            action : this.ctx.action || false,
        };
    }),

    def()(function() {
    this.mods.action = this.ctx.action;
    return applyNext();
    }),

    tag()('span'),

    content()(function(){
        var ctx = this.ctx,
            mods = this.mods;
        return {
            block : 'button',
            mods : {
                theme : 'vr',
                type : 'counter',
                size : mods.size,
                hovered : mods.toggled,
                disabled : mods.disabled,
            },
            url : ctx.url,
            content : [
                {
                    block : ctx.block,
                    elem : 'icon',
                    icon : ctx.icon || null
                },
                {
                    elem : 'text',
                    mix : {
                        block : 'counter',
                        elem : 'val'
                    },
                    content : ctx.count,
                }
            ]
        };
    })
);
