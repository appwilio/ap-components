module.exports = function (bh) {
    bh.match("button_progress_elastic", function (ctx, json){
        ctx.applyBase();
        ctx.content([
            {
                'elem' : 'elastic-loader',
                'tag' : 'svg',
                'attrs' : {
                    'viewBox' : '0 0 70 70'
                },
                'content' : {
                    'elem' : 'loader-path',
                    'tag' : 'path',
                    'attrs' : {
                        'd' : 'm35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z',
                    },
                }
            },
            ctx.content(),
        ], true);
    });
};
