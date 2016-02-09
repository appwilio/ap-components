module.exports = function (bh) {
    bh.match('collapse_has-header', function (ctx, json) {
        ctx
            .content([
                {
                    'elem' : 'header',
                    'mix' : {'elem' : 'switcher'},
                    'content' : [
                        json.preview,
                        {
                            'elem' : 'switcher'
                        },
                    ],
                },
                {
                    'elem' : 'content',
                    'content' : json.content
                },
            ], true);
    });
};
