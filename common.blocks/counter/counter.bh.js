module.exports = function(bh) {
    bh.match('counter', function (ctx, json) {
        var icon = json.icon || null;

        ctx.js({
            'val' : json.count || 0,
            'action' : json.action || false,
        })
            .mod('action', ctx.param('action'))
            .tag('span')
            .content({
                'block' : 'button',
                'mods' : {
                    'theme' : 'vr',
                    'type' : 'counter',
                    'size' : ctx.mod('size'),
                    'hovered' : ctx.mod('toggled'),
                    'disabled' : ctx.mod('disabled'),
                },
                'url' : json.url,
                'content' : [
                    {
                        block : json.block,
                        elem : 'icon',
                        icon : icon
                    },
                    {
                        'elem' : 'text',
                        'mix' : {
                            'block' : 'counter',
                            'elem' : 'val'
                        },
                        'content' : json.count,
                    }
                ]
            });
    });
};
