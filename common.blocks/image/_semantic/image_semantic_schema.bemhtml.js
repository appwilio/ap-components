block('image').mod('semantic', 'schema')(
    attrs()(function () {
        return {
                itemprop : 'contentUrl',
                alt : this.ctx.alt,
                src : this.ctx.url,
                title : this.ctx.title
             };
    }),

    match(function () {
        return this.mods.wrap;
    }).content()(
        function () {
            return {
                tag : 'figure',
                itemscope : true,
                itemtype : 'http://schema.org/ImageObject',
                content : [
                    applyNext(this.ctx.content),
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
);
