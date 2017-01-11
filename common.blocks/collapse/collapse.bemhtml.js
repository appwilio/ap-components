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
                    this.ctx.preview,
                    {
                        elem : 'switcher',
                        elemMods : { opened : isOpened }
                    }
                ]
            },
            {
                elem : 'content',
                elemMods : { visible : isOpened },
                content : this.ctx.content
            }
        ];
    })
);
