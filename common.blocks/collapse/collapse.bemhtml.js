block('collapse')(
    js()(true),
    content()(function(){
        var isOpened = !!this.mods.opened;
        return [
            {
                elem : 'header',
                mix : {
                    elem : 'switcher',
                    elemMods : { opened : isOpened }
                },
                content : [
                    {
                        elem : 'title',
                        content : apply('preview')
                    },
                    {
                        elem : 'tick',
                        mix : {
                            elem : 'switcher',
                            elemMods : { opened : isOpened }
                        }
                    }
                ]
            },
            {
                elem : 'content',
                elemMods : { visible : isOpened },
                content : this.ctx.content
            }
        ];
    }),
    mode('preview')(function() {
        return this.ctx.preview;
    })
);
