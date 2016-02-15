module.exports = function (bh) {
 bh.match('gpt', function (ctx){
     var id = ctx.generateId();
     ctx.js({ slot : ctx.param('slot'), 'id' : id });
     ctx.attr('id', id);
 });
};
