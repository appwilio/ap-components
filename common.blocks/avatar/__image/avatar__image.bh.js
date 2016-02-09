module.exports = function (bh) {
 bh.match("avatar__image", function (ctx, json){
     ctx.applyBase();
     return {
         'block' : 'image',
         'url' : ctx.param('url'),
         'mix' : { 'block' : json.block, 'elem' : 'image'}
     };
 });
};
