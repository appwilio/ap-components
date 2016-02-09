module.exports = function (bh) {
    bh.match('avatar', function (ctx, json) {
        ctx.mod('default', !json.image? ctx.mod('default'): false, true);
        ctx.content([
            {
                'elem' : 'link',
                'attrs' : {'href' : json.url},
                'content' :
                        {
                            'elem' : 'image',
                            'url' : json.image,
                        }
            },
        ]);
    });
};
