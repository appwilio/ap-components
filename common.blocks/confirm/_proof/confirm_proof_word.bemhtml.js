block('confirm').mod('proof', 'word')(
    js()(function () {
        return { word : this.ctx.word };
    }),

    content()(function () {
        var ctx = this.ctx;
        return [
            {
                block : ctx.block,
                elem : 'text',
                content : ctx.text
            },
            {
                block : 'input',
                mix : [{ block : ctx.block, elem : 'input' }],
                autocomplete : false,
                placeholder : 'Введите текст',
                mods : {
                    focused : true,
                    theme : ctx.mods.theme,
                    size : 'l',
                    type : 'text',
                    width : 'available'
                }
            }
        ];
    })
);
