module.exports = function (bh) {
 bh.match('alert_has-icon', function (ctx, json){
     ctx.applyBase();
     ctx.content([
         {
             elem : 'aside',
             content : json.icon || { elem : 'icon', mods : { status : json.mods.status } }
         },
         ctx.content()
     ], true);
 });
};
