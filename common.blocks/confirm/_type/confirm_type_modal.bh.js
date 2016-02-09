module.exports = function (bh) {
    bh.match("confirm_type_modal", function (ctx, json){
        ctx.applyBase();
        var style = ctx.tParam('style');
        return [
            {
                'block' : 'modal',
                'mods' : {
                    'theme' : json.mods.theme,
                    'has-header' : !!json.header,
                    'paddings' : 'm',
                    'style' : style
                },
                'mix' : {
                    'block' : json.block,
                    'mods' : json.mods,
                    'js' : ctx.js()
                },
                'header' : json.header,
                'content' : [
                    {
                        'block' : json.block,
                        'elem' : 'container',
                        'content' : [
                            ctx.content(),
                            {
                                'block' : json.block,
                                'elem' : 'footer',
                                'content' : [
                                    {
                                        'block' : 'button',
                                        'mix' : {
                                            'block' : json.block,
                                            'elem' : 'yes'
                                        },
                                        'mods' : {
                                            'size' : 'l',
                                            'theme' : json.mods.theme,
                                            'view' : style
                                        },
                                        'text' : json.submit || 'Подтвердить'
                                    },
                                    {
                                        'block' : 'button',
                                        'mix' : {
                                            'block' : json.block,
                                            'elem' : 'no'
                                        },
                                        'mods' : {
                                            'size' : 'l',
                                            'theme' : json.mods.theme,
                                            'view' : 'pseudo'
                                        },
                                        'text' : json.cancel || 'Отмена'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }, //modal
        ];
    });
};
