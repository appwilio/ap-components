block('image').mod('load', 'lazy')(
    match(function() { return this.mods.semantic; })(
        attrs()({
                itemprop : false,
                itemscope : false,
                itemtype : 'http://schema.org/ImageObject'
            })
    ),

    tag()('span'),

    js()(function () {
        return { url : this.ctx.url };
    }),

    content()(function () {
        var ctx = this.ctx;
        return [
               {
                   elem : 'container',
                   tag : 'span',
                   content : [
                       {
                           block : 'image',
                           mix : { elem : 'img' },
                           alt : ctx.alt,
                           title : ctx.title,
                           width : ctx.width,
                           height : ctx.height
                       },
                       {
                           elem : 'spin',
                           tag : 'span'
                       }
                   ]
               },
               {
                   elem : 'fallback',
                   content : {
                       block : 'image',
                       mods : { semantic : ctx.mods.semantic },
                       url : ctx.url,
                       alt : ctx.alt
                   }
               }
        ];
    })
);
