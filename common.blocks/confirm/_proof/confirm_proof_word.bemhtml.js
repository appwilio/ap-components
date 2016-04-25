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
                mix : [{ block : this.block, elem : 'input' }],
                autocomplete : false,
                placeholder : 'Введите текст',
                mods : {
                    focused : true,
                    theme : this.mods.theme,
                    size : 'l',
                    type : 'text',
                    width : 'available'
                }
            }
        ];
    })
);
