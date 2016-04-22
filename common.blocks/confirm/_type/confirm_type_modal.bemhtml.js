block('confirm').mod('type', 'modal').def()(
    applyNext(function () {
        var ctx = this.ctx;
        return [
            {
                block : 'modal',
                mods : {
                    'theme' : ctx.mods.theme,
                    'has-header' : ctx.header,
                    'paddings' : 'm',
                    'style' : ctx.style
                },
                mix : [{
                    block : ctx.block,
                    mods : ctx.mods,
                    js : ctx.js
                }],
                header : ctx.header,
                content : [
                    {
                        block : ctx.block,
                        elem : 'container',
                        content : [
                            applyNext(),
                            {
                                block : ctx.block,
                                elem : 'footer',
                                content : [
                                    {
                                        block : 'button',
                                        mix : [{
                                            block : ctx.block,
                                            elem : 'yes'
                                        }],
                                        mods : {
                                            size : 'l',
                                            theme : ctx.mods.theme,
                                            view : ctx.style
                                        },
                                        text : ctx.submit || 'Подтвердить'
                                    },
                                    {
                                        block : 'button',
                                        mix : [{
                                            block : ctx.block,
                                            elem : 'no'
                                        }],
                                        mods : {
                                            size : 'l',
                                            theme : ctx.mods.theme,
                                            view : 'pseudo'
                                        },
                                        text : ctx.cancel || 'Отмена'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
    })
);
