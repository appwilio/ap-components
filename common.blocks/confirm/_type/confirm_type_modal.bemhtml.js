block('confirm').mod('type', 'modal').replace()(function(){
    this.ctx.style = this.mods.style || 'error';
    var ctx = this.ctx,
        style = ctx.style;

    return applyCtx([
        {
            'block' : 'modal',
            'mods' : {
                'theme' : this.mods.theme,
                'has-header' : !!ctx.header,
                'paddings' : 'm',
                'style' : style
            },
            'mix' : {
                'block' : this.block,
                'mods' : this.mods,
                'js' : apply('js')
            },
            'header' : ctx.header,
            'content' : [
                {
                    'block' : this.block,
                    'elem' : 'container',
                    'content' : [
                        applyNext(ctx.content),
                        {
                            'block' : this.block,
                            'elem' : 'footer',
                            'content' : [
                                {
                                    'block' : 'button',
                                    'mix' : {
                                        'block' : this.block,
                                        'elem' : 'yes'
                                    },
                                    'mods' : {
                                        'size' : 'l',
                                        'theme' : this.mods.theme,
                                        'view' : style
                                    },
                                    'text' : ctx.submit || 'Подтвердить'
                                },
                                {
                                    'block' : 'button',
                                    'mix' : {
                                        'block' : this.block,
                                        'elem' : 'no'
                                    },
                                    'mods' : {
                                        'size' : 'l',
                                        'theme' : this.mods.theme,
                                        'view' : 'pseudo'
                                    },
                                    'text' : ctx.cancel || 'Отмена'
                                },
                            ]
                        }
                    ]
                }
            ]
        } // modal
    ]);
});
