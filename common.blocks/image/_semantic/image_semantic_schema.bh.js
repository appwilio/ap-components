module.exports = function(bh){
    bh.match('image_semantic_schema', function(ctx, json){
        ctx.attrs({
            itemprop : 'contentUrl',
        });
        ctx.applyBase();
        if(ctx.mod('wrap')){
            ctx.content({
                tag : 'figure',
                itemscope : true,
                itemtype : 'http://schema.org/ImageObject',
                content : [
                    ctx.content(),
                    json.caption?
                    {
                        tag : 'figcaption',
                        attrs : { itemprop : 'description' },
                        content : json.caption,
                    }: ''
                ]
            }, true);
        }
    });
};
