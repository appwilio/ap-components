
module.exports = function (bh) {
   bh.match('image__fallback', function (ctx){
     ctx.tag('noscript');
   });
};
