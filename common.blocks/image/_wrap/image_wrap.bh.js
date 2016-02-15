module.exports = function (bh) {
 bh.match('image_wrap', function (ctx){
     ctx.applyBase();

     return {
         'elem' : 'wrap',
         'content' : ctx.json()
     };
 });
};
