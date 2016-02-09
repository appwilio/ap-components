module.exports = function (bh) {

bh.match('select_nested', function(ctx, json){
        function containsVal(val) {
            return isValDef &&
                (isModeCheck?
                    json.val.indexOf(val) > -1 :
                    json.val === val);
        }

        function iterateOptions(content) {
            var i = 0, option;
            while(option = content[i++]) {
                if(option.group) {
                    if(option.option){
                        iterateOptions([option.option]);
                    }
                    iterateOptions(option.group);
                } else {
                    firstOption || (firstOption = option);
                    if(containsVal(option.val)) {
                        option.checked = true;
                        checkedOptions.push(option);
                    }
                }
            }
        }

        var isValDef = typeof json.val !== 'undefined',
            isModeCheck = ctx.mod('mode') === 'check',
            firstOption, checkedOptions = [];

        iterateOptions(json.options);
        ctx
            .tParam('firstOption', firstOption)
            .tParam('checkedOptions', checkedOptions)
});

bh.match("select__menu", function (ctx, json){ //вообще то тут должен быть select_nested но он не матчился.
        //ctx.applyBase();
        var select = ctx.tParam('select') || ctx.param('select');
        var mods = ctx.mods();

        var optionToMenuItem = function(option){
            var res = {
                'block' : 'menu-item',
                'mods' : {
                    'disabled' : mods.disabled || option.disabled,
                    checked : option.checked
                },
                'val' : option.val,
                'js' : { 'checkedText' : option.checkedText },
                'content' : option.text
            };

            if (option.icon) {
                res.js.text = option.text;
                res.content = [
                    option.icon,
                    res.content
                ];
            }

            return res;
        };

        var processOptionOrGroup = function(optionOrGroup){
            return optionOrGroup.group?
                {
                    'elem' : 'group',
                    'title' : optionOrGroup.title,
                    'option' : optionOrGroup.option?  optionToMenuItem(optionOrGroup.option) : false,
                    'content' : optionOrGroup.group.map(processOptionOrGroup)
                } :
                optionToMenuItem(optionOrGroup);
        };

        return select.options ? {
            'block' : 'menu',
            'mix' : { 'block' : json.block, 'elem' : json.elem },
            'mods' : {
                'size' : mods.size,
                'theme' : mods.theme,
                'disabled' : mods.disabled,
                'mode' : mods.mode,
                'nested' : mods.nested
            },
            'val' : select.val,
            'attrs' : { 'tabindex' : null },
            'content' : select.options.map(processOptionOrGroup)
        } : null;
 });
};
