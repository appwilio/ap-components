module.exports = function (bh) {
    bh.match('collapse_has-header', function (ctx, json) {
        ctx.applyBase();
        ctx
            .content([
                {
                    'elem' : 'header',
                    'mix' : { 'elem' : 'switcher' },
                    'content' : [
                        ctx.param('preview'),
                        {
                            'elem' : 'switcher'
                        }
                    ]
                },
                ctx.content()
            ], true);
    });
};
