module.exports = function(bh) {

  bh.match('collapse', function(ctx, json) {
    var isOpened = !!json.mods.opened;
    ctx
        .js(true)
        .content([
            {
                elem : 'header',
                mix : {
                    elem : 'switcher',
                    mods : { opened : isOpened }
                },
                content : [
                    {
                        elem : 'title',
                        content : ctx.param('preview'),
                    },
                    {
                        elem : 'tick',
                        mix : {
                            elem : 'switcher',
                            mods : { opened : isOpened }
                        }
                    }
                ]
            },
            {
                elem : 'content',
                mods : { visible : isOpened },
                content : json.content
            }
        ], true);
  });
};
