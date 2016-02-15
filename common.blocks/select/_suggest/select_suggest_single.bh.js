module.exports = function (bh) {
    bh.match('select_suggest_single__button', function (ctx, json){
        var mods = json.blockMods? null : json.mods,
        checkedOptions = ctx.tParam('checkedOptions');

        return {
            'block' : 'control-group',
            'content' : [
                { 'block' : json.block, 'elem' : 'input' },
                {
                    'block' : 'button',
                    'mix' : { 'block' : json.block, 'elem' : json.elem },
                    'mods' : {
                        'size' : mods.size,
                        'theme' : mods.theme,
                        'view' : mods.view,
                        'disabled' : mods.disabled,
                        'checked' : mods.mode !== 'radio' && !!checkedOptions.length
                    },
                    'content' : [
                        { 'block' : 'icon', 'mix' : { 'block' : 'select', 'elem' : 'tick' } }
                    ]
                }
            ]
        };
    });
};
