module.exports = function (bh) {
 bh.match('popup_hastail', function (ctx){
     ctx.applyBase();
     ctx.content([
         { elem : 'tail' },
         { elem : 'content', content : ctx.content() }
     ], true);
 });
};
