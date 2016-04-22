block('image').mod('semantic', 'schema')(
    attrs()({
        itemprop : 'contentUrl'
    }),

    match(function() { return this.mods.wrap; })(
        content()(
            function () {
                return {
                    tag : 'figure',
                    itemscope : true,
                    itemtype : 'http://schema.org/ImageObject',
                    content : [
                        applyNext(),
                        this.ctx.caption?
                        {
                            tag : 'figcaption',
                            attrs : { itemprop : 'description' },
                            content : this.ctx.caption,
                        }: ''
                    ]
                };
            }
        )
    )
);
