module.exports = function (bh) {
 bh.match("select_suggest_multiple", function (ctx, json){
        ctx.applyBase();
        ctx.content([
            { 'elem' : 'button' },
            {
                'block' : 'popup',
                'mods' : { 'target' : 'anchor', 'theme' : ctx.mod('theme'), 'autoclosable' : true },
                'directions' : ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                'content' : [
                    { 'block' : json.block, 'mods' : ctx.mods(), 'elem' : 'input'},
                    { 'block' : json.block, 'mods' : ctx.mods(), 'elem' : 'menu' }
                ]
            }
        ], true);
 });
};
