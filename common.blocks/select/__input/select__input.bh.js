module.exports = function (bh) {
 bh.match('select__input', function (ctx, json){
    var select = ctx.tParam('select'),
        mods = select.mods,
        checkedOptions = ctx.tParam('checkedOptions');
     return     {
                    'block' : 'input',
                    'mix' : { 'block' : json.block, 'elem' : 'input' },
                    'id' : select.id,
                    attrs: {name: false},
                    placeholder: select.placeholder,
                    autocomplete: false,
                    'mods' : {
                        'size' : mods.size,
                        'theme' : mods.theme,
                        'style' : 'material',
                        'type' : 'text',
                        'focused' : mods.focused,
                        'disabled' : mods.disabled,
                        'has-clear' : true
                    },
                    'tabIndex' : select.tabIndex,
                    'val' : checkedOptions[0]? checkedOptions[0].text : null
                };
 });
};
