module.exports = function (bh) {
 bh.match("image_wrap", function (ctx, json){
     ctx.applyBase();

     return {
         'elem' : 'wrap',
         'content' : ctx.json()
     };
 });
};
