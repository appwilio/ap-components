module.exports = function (bh) {
 bh.match("gpt", function (ctx, json){
     var id = ctx.generateId();
     ctx.js({'slot' : ctx.param('slot'), 'id' : id});
     ctx.attr('id', id);
 });
};
